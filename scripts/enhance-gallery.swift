import AppKit
import CoreImage
import ImageIO
import UniformTypeIdentifiers

let arguments = CommandLine.arguments

guard arguments.count == 3 else {
    fputs("Usage: enhance-gallery.swift <input-directory> <output-directory>\n", stderr)
    exit(1)
}

let fileManager = FileManager.default
let inputDirectory = URL(fileURLWithPath: arguments[1], isDirectory: true)
let outputDirectory = URL(fileURLWithPath: arguments[2], isDirectory: true)
let supportedExtensions = Set(["jpg", "jpeg", "png", "webp"])
let context = CIContext(options: [.useSoftwareRenderer: true])

try fileManager.createDirectory(at: outputDirectory, withIntermediateDirectories: true)

let sourceFiles = try fileManager.contentsOfDirectory(
    at: inputDirectory,
    includingPropertiesForKeys: nil,
    options: [.skipsHiddenFiles]
).filter { supportedExtensions.contains($0.pathExtension.lowercased()) }
 .sorted { $0.lastPathComponent.localizedStandardCompare($1.lastPathComponent) == .orderedAscending }

for (index, sourceURL) in sourceFiles.enumerated() {
    guard var image = CIImage(
        contentsOf: sourceURL,
        options: [.applyOrientationProperty: true]
    ) else {
        fputs("Could not read \(sourceURL.path)\n", stderr)
        continue
    }

    image = image.applyingFilter("CINoiseReduction", parameters: [
        "inputNoiseLevel": 0.018,
        "inputSharpness": 0.42,
    ])
    image = image.applyingFilter("CIHighlightShadowAdjust", parameters: [
        "inputHighlightAmount": 0.92,
        "inputShadowAmount": 0.18,
    ])
    image = image.applyingFilter("CIColorControls", parameters: [
        kCIInputSaturationKey: 1.09,
        kCIInputBrightnessKey: 0.006,
        kCIInputContrastKey: 1.055,
    ])
    image = image.applyingFilter("CISharpenLuminance", parameters: [
        kCIInputSharpnessKey: 0.32,
        kCIInputRadiusKey: 1.05,
    ])

    guard let cgImage = context.createCGImage(image, from: image.extent) else {
        fputs("Could not render \(sourceURL.path)\n", stderr)
        continue
    }

    let outputName = String(format: "gallery-competition-%02d.jpg", index + 1)
    let outputURL = outputDirectory.appendingPathComponent(outputName)

    guard let destination = CGImageDestinationCreateWithURL(
        outputURL as CFURL,
        UTType.jpeg.identifier as CFString,
        1,
        nil
    ) else {
        fputs("Could not create \(outputURL.path)\n", stderr)
        continue
    }

    CGImageDestinationAddImage(destination, cgImage, [
        kCGImageDestinationLossyCompressionQuality: 0.88,
    ] as CFDictionary)

    guard CGImageDestinationFinalize(destination) else {
        fputs("Could not save \(outputURL.path)\n", stderr)
        continue
    }

    print("Created \(outputName)")
}

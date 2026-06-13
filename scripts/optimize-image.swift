import CoreImage
import ImageIO
import UniformTypeIdentifiers

let arguments = CommandLine.arguments

guard arguments.count == 5,
      let targetWidth = Double(arguments[3]),
      let quality = Double(arguments[4]) else {
    fputs("Usage: optimize-image.swift <input> <output> <width> <quality>\n", stderr)
    exit(1)
}

let inputURL = URL(fileURLWithPath: arguments[1])
let outputURL = URL(fileURLWithPath: arguments[2])

guard var image = CIImage(
    contentsOf: inputURL,
    options: [.applyOrientationProperty: true]
) else {
    fputs("Could not read \(inputURL.path)\n", stderr)
    exit(1)
}

let scale = min(1, targetWidth / image.extent.width)

if scale < 1 {
    image = image.applyingFilter("CILanczosScaleTransform", parameters: [
        kCIInputScaleKey: scale,
        kCIInputAspectRatioKey: 1,
    ])
}

let context = CIContext(options: [.useSoftwareRenderer: true])

guard let cgImage = context.createCGImage(image, from: image.extent) else {
    fputs("Could not render \(inputURL.path)\n", stderr)
    exit(1)
}

let outputTypeIdentifier = outputURL.pathExtension.lowercased() == "avif"
    ? "public.avci"
    : UTType.jpeg.identifier

guard let destination = CGImageDestinationCreateWithURL(
    outputURL as CFURL,
    outputTypeIdentifier as CFString,
    1,
    nil
) else {
    fputs("Could not create \(outputURL.path)\n", stderr)
    exit(1)
}

CGImageDestinationAddImage(destination, cgImage, [
    kCGImageDestinationLossyCompressionQuality: quality,
] as CFDictionary)

guard CGImageDestinationFinalize(destination) else {
    fputs("Could not save \(outputURL.path)\n", stderr)
    exit(1)
}

print("Created \(outputURL.path)")

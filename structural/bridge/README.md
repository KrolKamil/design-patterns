# Builder

## Use case

// Could not describe this better : d

The Bridge pattern is something you implement up front - if you know you have two orthogonal hierarchies, it provides a way to decouple the interface and the implementation in such a way that you don't get an insane number of classes. Let's say you have:

MemoryMappedFile and DirectReadFile types of file objects. Let's say you want to be able to read files from various sources (Maybe Linux vs. Windows implementations, etc.). Bridge helps you avoid winding up with:

MemoryMappedWindowsFile MemoryMappedLinuxFile DirectReadWindowsFile DirectReadLinuxFile

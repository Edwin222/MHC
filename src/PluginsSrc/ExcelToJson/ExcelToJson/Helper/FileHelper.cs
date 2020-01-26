using System.Linq;

namespace ExcelToJson.Helper
{
    public static class FileHelper
    {
        public static string ParseFileNameFromPath(string path)
        {
            var fileNameWithExtension = ParseFileNameWithExtensionFromPath(path);

            return fileNameWithExtension.Substring(0, fileNameWithExtension.LastIndexOf('.'));
        }

        public static string ParseFileNameWithExtensionFromPath(string path)
        {
            var directoryElements = path.Split('\\');

            return directoryElements.Last();
        }
    }
}

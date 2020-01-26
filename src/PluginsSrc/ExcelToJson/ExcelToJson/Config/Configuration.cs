using ExcelToJson.Helper;
using System.IO;

namespace ExcelToJson.Config
{
    public class Configuration
    {
        static readonly string configFileName = "Convert.Config";
        static readonly string defaultDirectory = ".";

        public string ImportDirectory { get; private set; }
        public string ExportDirectory { get; private set; }

        public Configuration()
        {
            ImportDirectory = defaultDirectory;
            ExportDirectory = defaultDirectory;
        }

        public void Read()
        {
            try
            {
                using (var configReader = new StreamReader(new FileStream(configFileName, FileMode.Open, FileAccess.Read)))
                {
                    ImportDirectory = configReader.ReadLine();
                    ExportDirectory = configReader.ReadLine();
                }
            }
            catch(FileNotFoundException e)
            {
                return;
            }
        }

        public static void WriteConfigFile(string importDir, string exportDir)
        {
            using(var configWriter = new StreamWriter(new FileStream(configFileName, FileMode.Create)))
            {
                configWriter.WriteLine($"{importDir}");
                configWriter.WriteLine($"{exportDir}");
            }
        }
    }
}

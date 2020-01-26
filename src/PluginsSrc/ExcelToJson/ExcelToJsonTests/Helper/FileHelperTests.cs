using ExcelToJson.Helper;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace ExcelToJsonTests.Helper
{
    [TestClass]
    public class FileHelperTests
    {
        [TestMethod]
        public void 확장자_포함한_파일명_테스트()
        {
            Assert.AreEqual("test.c", FileHelper.ParseFileNameWithExtensionFromPath("test.c"));
            Assert.AreEqual("test.c", FileHelper.ParseFileNameWithExtensionFromPath(".\\test.c"));
            Assert.AreEqual("test.c", FileHelper.ParseFileNameWithExtensionFromPath(".\\abc\\test\\test\\test.c"));
            Assert.AreEqual("test.test.c", FileHelper.ParseFileNameWithExtensionFromPath(".\\abc\\def\\test.test.c"));
        }

        [TestMethod]
        public void 파일명_파싱_테스트()
        {
            Assert.AreEqual("test", FileHelper.ParseFileNameFromPath("test.c"));
            Assert.AreEqual("test", FileHelper.ParseFileNameFromPath(".\\test.c"));
            Assert.AreEqual("test", FileHelper.ParseFileNameFromPath(".\\abc\\test\\test\\test.c"));
            Assert.AreEqual("test.test", FileHelper.ParseFileNameFromPath(".\\abc\\def\\test.test.c"));
        }
    }
}

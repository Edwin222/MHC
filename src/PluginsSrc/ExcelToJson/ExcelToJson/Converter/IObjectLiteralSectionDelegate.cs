namespace ExcelToJson.Converter
{
    public interface IObjectLiteralSectionDelegate
    {
        void OnCreated(ObjectLiteralSection section);
        void OnWrited(ObjectLiteralSection section, string text);
        void OnDisposed(ObjectLiteralSection section);
    }
}

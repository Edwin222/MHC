echo "데이터 읽기 경로 지정"
./plugins/ExcelToJson/ExcelToJson.exe -in "data"

echo "데이터 쓰기 경로 지정"
./plugins/ExcelToJson/ExcelToJson.exe -out "json"

echo "데이터 컨버트"
./plugins/ExcelToJson/ExcelToJson.exe
echo "==============================================="

echo "프로젝트 빌드 시작"
./node_modules/.bin/webpack

echo "==============================================="

echo "유닛 테스트 시작"
yarn _jest_test_run

echo "==============================================="
echo "계속하려면 아무 키나 누르세요."
read
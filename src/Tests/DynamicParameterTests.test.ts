
import { DynamicParameter } from "src/Framework/DataType/DynamicParameter";

test("기본 동작 테스트", () => {

    let parameter = new DynamicParameter(20);

    // 최초 생성시엔 최댓값이다.
    expect(parameter.Max).toEqual(20);
    expect(parameter.Current).toEqual(20);

    //감소 확인
    parameter.Decrease(10);
    expect(parameter.Current).toEqual(10);
    
    // 0보다 작게 떨어지지 않음
    parameter.Decrease(20);
    expect(parameter.Current).toEqual(0);

    // 증가 확인
    parameter.Increase(10);
    expect(parameter.Current).toEqual(10);

    // 최대값보다 크게 올라가지 않음
    parameter.Increase(20);
    expect(parameter.Current).toEqual(20);

    // 최댓값이 증가하면 같은 비율로 현재값도 증가
    parameter.IncreaseMax(10);
    expect(parameter.Max).toEqual(30);
    expect(parameter.Current).toEqual(30);

    // 최댓값이 감소하면 같은 비율로 현재값도 감소
    parameter.DecreaseMax(20);
    expect(parameter.Max).toEqual(10);
    expect(parameter.Current).toEqual(10);
});

test("예외 여부 테스트", () => {
    
    let parameter = new DynamicParameter(20);

    expect(parameter.Increase.bind(parameter, -10)).toThrowError(Error("파라미터 증가량은 음수가 될 수 없습니다."));
    expect(parameter.Decrease.bind(parameter, -10)).toThrowError(Error("파라미터 감소량은 음수가 될 수 없습니다."));
    expect(parameter.IncreaseMax.bind(parameter, -10)).toThrowError(Error("파라미터 최댓값 증가량은 음수가 될 수 없습니다."));
    expect(parameter.DecreaseMax.bind(parameter, -10)).toThrowError(Error("파라미터 최댓값 감소량은 음수가 될 수 없습니다."));
});
import { renderHook } from "@testing-library/react";
import useDebounce from "./useDebounce";

afterEach(() => {
    jest.useRealTimers();
  });

describe('useDebounce', ()=>{

    it('should debounce and only change value when delay time has passed', ()=>{
        jest.useFakeTimers();
        let testVar = 0;
        const cbFunc = () => { return testVar = 5;}
        renderHook(()=>useDebounce(cbFunc,[testVar],100))
        jest.advanceTimersByTime(50);
        expect(testVar).toBe(0)
        jest.advanceTimersByTime(50);
        expect(testVar).toBe(5)
    })

})
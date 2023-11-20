import formatDate from "./formatDate";

describe('Format Date', ()=>{
    it('Should return date in correct format',async()=>{
        let date = formatDate('2024/04/06 08:22:47')
        expect(date).toBe('April 6 @ 8:22 AM')
    })
    it('Should throw Error', ()=>{
        expect(()=>formatDate()).toThrow(Error)
    })
})
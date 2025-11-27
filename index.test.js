const { convertTimeToWords } = require('./index');

describe('Time to words', () => {
  it('Handles midnight', () => {
    const timeInWords = convertTimeToWords('0:00');
    expect(timeInWords).toBe('midnight');
  });

  it('Handles midday', () => {
    const timeInWords = convertTimeToWords('12:00');
    expect(timeInWords).toBe('midday');
  });

  it('Handles 30 - 8:30', () => {
    const timeInWords = convertTimeToWords('8:30');
    expect(timeInWords).toBe('half past eight');
  });

  it('Handles times after 30 mins - 2:45', () => {
    const timeInWords = convertTimeToWords('2:45');
    expect(timeInWords).toBe('quarter to three');
  });

  it('Handles times after 30 mins - 2:43', () => {
    const timeInWords = convertTimeToWords('2:43');
    expect(timeInWords).toBe('seventeen to three');
  });

  it('Handles times before 30 mins - 1:15', () => {
    const timeInWords = convertTimeToWords('1:15');
    expect(timeInWords).toBe('quarter past one');
  });

  it('Handles times before 30 mins - 1:10', () => {
    const timeInWords = convertTimeToWords('1:10');
    expect(timeInWords).toBe('ten past one');
  });

  it('Handles times from 12 to 1', () => {
    const timeInWords = convertTimeToWords('12:48');
    expect(timeInWords).toBe('twelve to one');
  });

  it("Handles times with o'clock", () => {
    const timeInWords = convertTimeToWords('8:00');
    expect(timeInWords).toBe("eight o'clock");
  });
});

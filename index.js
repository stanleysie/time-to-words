// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  // TODO: real code goes here!
  if (time === '0:00') {
    return 'midnight';
  }
  if (time === '12:00') {
    return 'midday';
  }

  const DIGIT_MAPPING = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'quarter',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    21: 'twenty one',
    22: 'twenty two',
    23: 'twenty three',
    24: 'twenty four',
    25: 'twenty five',
    26: 'twenty six',
    27: 'twenty seven',
    28: 'twenty eight',
    29: 'twenty nine',
    30: 'half',
  };

  let [hour, minute] = time.split(':');
  hour = Number(hour);
  minute = Number(minute);

  if (minute === 0) {
    return `${DIGIT_MAPPING[hour]} o'clock`;
  }

  if (minute <= 30) {
    return `${DIGIT_MAPPING[minute]} past ${DIGIT_MAPPING[hour]}`;
  }

  if (minute > 30) {
    hour = hour === 12 ? 1 : hour + 1;
    return `${DIGIT_MAPPING[60 - minute]} to ${DIGIT_MAPPING[hour]}`;
  }

  return 'Invalid time';
}

module.exports = { convertTimeToWords };

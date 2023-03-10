const monthOfDays = a => {
    switch (a) {
      case 31:
        return 31;
      case 60:
        return 29;
      case 91:
        return 31;
      case 121:
        return 30;
      case 152:
        return 31;
      case 182:
        return 30;
      case 213:
        return 31;
      case 244:
        return 31;
      case 274:
        return 30;
      case 305:
        return 31;
      case 335:
        return 30;
      case 366:
        return 31;
      default:
        return 0;
    }
  };
  
  const monthName = a => {
    switch (a) {
      case 31:
        return 'January';
      case 60:
        return 'February';
      case 91:
        return 'March';
      case 121:
        return 'April';
      case 152:
        return 'May';
      case 182:
        return 'June';
      case 213:
        return 'July';
      case 244:
        return 'August';
      case 274:
        return 'September';
      case 305:
        return 'October';
      case 335:
        return 'November';
      case 366:
        return 'December';
      default:
        return null;
    }
  };
  
  const monthNumber = a => {
    switch (a) {
      case 31:
        return '0' + 1;
      case 60:
        return '0' + 2;
      case 91:
        return '0' + 3;
      case 121:
        return '0' + 4;
      case 152:
        return '0' + 5;
      case 182:
        return '0' + 6;
      case 213:
        return '0' + 7;
      case 244:
        return '0' + 8;
      case 274:
        return '0' + 9;
      case 305:
        return 10;
      case 335:
        return 11;
      case 366:
        return 12;
      default:
        return 0;
    }
  };
  
function slnic (pnicNumber){
    var nicNumber = String(pnicNumber);
    const month = [31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 366];
    var i = -1,
      d = 0;
    var mid, mtemp, monInNum, checkValue;
  
    var gender, firstTwo, middle, mon, crdType;
    var BIRTH_DAY, AGE, YEAR, MONTH, DAY, GENDER, MONTH_NUMBER;
  
    if (nicNumber.length === 10 || nicNumber.length === 12) {
      if (nicNumber.length == 10) {
        crdType = 'Old NIC';
        checkValue = 10;
        firstTwo = `19${nicNumber.substring(0, 2)}`;
        middle = nicNumber.substring(2, 5);
        if (parseInt(middle) < 500) {
          gender = 'Male';
          for (let a = 0; a < month.length; a++) {
            ++i;
            if (month[a] > parseInt(middle)) {
              monInNum = monthNumber(month[a]);
              mon = monthName(month[a]);
              mid = parseInt(middle);
              try {
                mtemp = month[--i];
              } catch (Exception) {
                //
              }
              for (let i = 1; i < monthOfDays(month[a]); i++) {
                mtemp++;
                d++;
                if (mtemp == mid) break;
              }
              break;
            }
          }
        } else {
          gender = 'Female';
          for (var a = 0; a < month.length; a++) {
            ++i;
            if (month[a] > parseInt(middle) - 500) {
              monInNum = monthNumber(month[a]);
              mon = monthName(month[a]);
              mid = parseInt(middle) - 500;
              mtemp = month[--i];
              for (let i = 1; i < monthOfDays(month[a]); i++) {
                mtemp++;
                d++;
                if (mtemp == mid) break;
              }
              break;
            }
          }
        }
      } else {
        crdType = 'New NIC';
        checkValue = 12;
        firstTwo = nicNumber.substring(0, 4);
        middle = nicNumber.substring(4, 7);
        if (parseInt(middle) < 500) {
          gender = 'Male';
          for (let a = 0; a < month.length; a++) {
            ++i;
            if (month[a] > parseInt(middle)) {
              monInNum = monthNumber(month[a]);
              mon = monthName(month[a]);
              mid = parseInt(middle);
              try {
                mtemp = month[--i];
              } catch (Exception) {
                //
              }
              for (let i = 1; i < monthOfDays(month[a]); i++) {
                mtemp++;
                d++;
                if (mtemp == mid) break;
              }
              break;
            }
          }
        } else {
          gender = 'Female';
          for (let a = 0; a < month.length; a++) {
            ++i;
            if (month[a] > parseInt(middle) - 500) {
              monInNum = monthNumber(month[a]);
              mon = monthName(month[a]);
              mid = parseInt(middle) - 500;
              try {
                mtemp = month[--i];
              } catch (Exception) {
                //
              }
              for (let i = 1; i < monthOfDays(month[a]); i++) {
                mtemp++;
                d++;
                if (mtemp == mid) break;
              }
              break;
            }
          }
        }
      }
    }
  
    return {
      BIRTH_DAY: `${firstTwo}-${monInNum}-${d}`,
      AGE: `${parseInt(new Date().getFullYear() - firstTwo)}`,
      GENDER: gender,
      DAY: d,
      MONTH: mon,
      MONTH_NUMBER: monInNum,
      CARD_TYPE: crdType,
      BIRTH_YEAR: firstTwo,
    };
  };

module.exports = slnic;

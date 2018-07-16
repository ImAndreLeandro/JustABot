function need(level) {
  var xp = [100, 110, 120, 130, 140, 150, 160, 170, 180, 280, 300, 320, 340,
            360, 380, 400, 420, 440, 460, 860, 900, 940, 980, 1020, 1060, 1100,
            1140, 1180, 1220, 2130, 2200, 2270, 2340, 2410, 2480, 2550, 2620, 2690,
            2760, 4000, 4100, 4200, 4300, 4400, 4500, 4600, 4700, 4800, 4900, 7450,
            7600, 7750, 7900, 8050, 8200, 8350, 8500, 8650, 8800, 13080, 13300, 13520,
            13740, 13960, 14180, 14400, 14620, 14840, 15060, 22180, 22500, 22820, 23140,
            23460, 23780, 24100, 24420, 24740, 25060, 35650, 36100, 36550, 37000, 37450,
            37900, 38350, 38800, 39250, 39700, 56170, 56800, 57430, 58060, 58690, 59320,
            59950, 60580, 61210, 61840, 75000
            , 999999999];
  return xp[level-1];
}

function coins(level) {
  var coins = [1, 2, 3, 4, 5, 6, 7, 8, 9, 19, 21, 23, 25, 27, 29, 31, 33, 35,
               37, 58, 61, 64, 67, 70, 73, 76, 79, 82, 85, 117, 121, 125, 129, 133,
               137, 141, 145, 149, 153, 196, 201, 206, 211, 216, 221, 226, 231, 236,
               241, 393, 401, 409, 417, 425, 433, 441, 449, 457, 465, 591, 601, 611,
               621, 631, 641, 651, 661, 671, 681, 1036, 1051, 1066, 1081, 1096, 1111,
               1126, 1141, 1156, 1171, 1739, 1761, 1783, 1805, 1827, 1849, 1871, 1893,
               1915, 1937, 2671, 2701, 2731, 2761, 2791, 2821, 2851, 2881, 2911, 2941
               , 0];
  return coins[level-1];
}

function getGuildLevelUp(option) {
  switch (option) {
    case 1:
      return "Send to private";
    case 2:
      return "Turned off";
    default:
      return "Default";
  }
}

module.exports = {
  need: need,
  coins: coins,
  getGuildLevelUp: getGuildLevelUp
}
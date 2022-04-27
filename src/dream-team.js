const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let res = [];
  if (!Array.isArray(members)) return false;

  for (let i = 0; i < members.length; i++) {
    let member = members[i];

    if (!(typeof member === "string")) continue;

    if (member == null || member === undefined) continue;

    member = members[i].replace(/\s/g, "");

    let temp = member.charAt(0);

    if (temp.match(/[A-Za-z]/)) {
      res.push(temp.toUpperCase());
    }
  }
  res.sort();
  return res.join("");
}

module.exports = {
  createDreamTeam,
};

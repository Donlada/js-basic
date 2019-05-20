function hello1(name) {
  // ตัวอย่างโค้ด
  if (name) {
    return "hello " + name;
  }
  return "Who are you?";
}

function hello2(firstname, lastname) {
  /**
   * return string ตาม format
   * My name is <firstname> <lastname>.
   * หากไม่มีนามสกุล ไม่ต้องแสดงนามสกุล
   * หากไม่มีชื่อ ให้แสดงเป็น I have no firstname, but my lastname is <lastname>.
   */
  // TODO: Write code here
}

module.exports = { hello1, hello2 };

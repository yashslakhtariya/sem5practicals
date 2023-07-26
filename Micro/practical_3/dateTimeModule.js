let d = new Date();

function YSLdatetime() {
  let date = d.getDate();
  let month = d.getMonth();
  let year = d.getFullYear();
  let hour = d.getHours();
  let min = d.getMinutes();
  let sec = d.getSeconds();

  return {
    tarikh: `${date}-${month}-${year}`,
    samay: `${hour}:${min}:${sec}`
  };
}

module.exports = YSLdatetime;

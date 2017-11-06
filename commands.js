module.exports = {
  pwd: function() {
    process.stdin.on("data", function (data) {
      var cmd = data.toString().trim();
      if (cmd === "pwd") {
        process.stdout.write(__filename);
      }
    })
  }
}

// Output a prompt
process.stdout.write("prompt > ");

var commands = require("./commands")

var userCommand = "pwd";
commands[userCommand]();


// The stdin ‘data’ event fires after a user types in a line
process.stdin.on("data", function (data) {
  var cmd = data.toString().trim(); // remove the newline
  if (cmd === "date") {
    var datetime = new Date();
    process.stdout.write(datetime.toString());
  }
  // process.stdout.write(‘You typed: ’ + cmd);
  // process.stdout.write(‘\nprompt > ’);

});

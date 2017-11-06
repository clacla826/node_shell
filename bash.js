// Output a prompt
process.stdout.write("prompt > ");

var commands = require("./commands");

var userCommand = "pwd";
commands[userCommand]();

var userCommand = "ls";
commands[userCommand]();

var userCommand = "cat";
commands[userCommand]();

// The stdin ‘data’ event fires after a user types in a line
process.stdin.on("data", function (data) {


  var cmd = data.toString().trim(); // remove the newline
  var arr = cmd.split(' ')
  if (cmd === "date") {
    var datetime = new Date();
    process.stdout.write(datetime.toString());
  }
  if (arr[0] === "echo") {
    console.log(cmd)
    process.stdout.write(cmd.slice(4));
    process.stdout.write('\nprompt > ');
  }

});

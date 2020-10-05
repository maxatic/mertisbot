
module.exports = {
	name: 'gpa',
	description: 'gpa',
	async execute(message, args) {
        
        var gpaOverall = 0.0;
        var gpaForTheYear = 0.0;
        var gpaSum = 0.0;
        var counter = 0;

        var tempNumArgs;
        var tempSum;

 //DEBUG
 message.channel.send(`\`
 ***DEBUG***
 gpaOverall = ${gpaOverall};
 gpaForTheYear = ${gpaForTheYear};
 gpaSum = ${gpaSum};
 counter = ${counter};
 tempNumArgs = ${tempNumArgs}
 tempSum = ${tempSum}
 --------------------\``);


        // for (i = 9; i < 14; i++) {
        //     message.channel.send(`Please enter your grades for ${i}th grade:`).then(() => {
        //         var filter = m => message.author.id === m.author.id;
        //         message.channel.awaitMessages(filter, { time: 60000, max: 1, errors: ['time'] })
        //             .then(messages => {
        //                 //stop
        //                 if(message.first().content === 'stop')
        //                     break;
                        
        //                 //check(debug)
        //                 message.channel.send(`You've entered: ${messages.first().content}`);
                        
        //                 //calculations
        //                 tempNumArgs = args.map(x => parseFloat(x));
        //                 tempSum = numArgs.reduce((counter, x) => counter += x);
        //                 gpaForTheYear = tempSum;    //TODO: change to tempSum / tempNumArgs.count
        //                 gpaSum += gpaForTheYear;
        //                 ++counter;
        //             })
        //             .catch(() => {
        //                 message.channel.send('You did not enter any input!');
        //             });
        //     });

        // }

        
        

        message.channel.send(`Please enter your grades for 9th grade:`);
        var filter = m => m.author.id === message.author.id;
        const answer = await message.channel.aawaitMessages(filter, {maxMatches: 1, time: 60000, errors:['time', 'maxMatches', 'stop']});
        message.channel.send(answer.first().content);



            // message.channel.send(``).then(() => {
            //     var filter = m => message.author.id === m.author.id;

            //     message.channel.send(`Please enter your grades for 9th grade:`);
                
            //     const collector = message.channel.createMessageCollector(filter, { time: 60 * 1000 });

            //     message.channel.awaitMessages(filter, { time: 60000, max: 1, errors: ['time'] })
            //         .then(messages => {
            //             //stop
            //             if(message.first().content === 'stop')
            //                 break;
                        
            //             //check(debug)
            //             message.channel.send(`You've entered: ${messages.first().content}`);
                        
            //             //calculations
            //             tempNumArgs = args.map(x => parseFloat(x));
            //             tempSum = numArgs.reduce((counter, x) => counter += x);
            //             gpaForTheYear = tempSum;    //TODO: change to tempSum / tempNumArgs.count
            //             gpaSum += gpaForTheYear;
            //             //++counter;
            //         })
            //         .catch(() => {
            //             message.channel.send('You did not enter any input!');
            //         });
            // });



        if(counter > 0){
            gpaOverall = gpaSum;  //TODO: change to gpaSum / counter
            message.channel.send(`\`GPA = ${gpaOverall.toFixed(3)}\``);
        }

        //DEBUG
        message.channel.send(`
\`***DEBUG***
gpaOverall = ${gpaOverall};
gpaForTheYear = ${gpaForTheYear};
gpaSum = ${gpaSum};
counter = ${counter};
tempNumArgs = ${tempNumArgs}
tempSum = ${tempSum}
--------------------\``);
    }
}



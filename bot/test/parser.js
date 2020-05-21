    let s = `!plot some text  v=23,43,23,45,12`;
    // let s = `!plot as plot=99,100,200,2,2,1`;

    let matches = s.match(/\b[a-z_]+=[^\n]+(\n|$)/ig);
    let mapped = matches.reduce((a,b, c) => {
        let bits = b.trim().split('=');
        return {
            [bits[0]]:bits[1],
            ...a
        }
    }, {});

    s.replace(/\b[a-z_]=[^\n]+(\n|$)/ig,'')


        console.log(mapped);


    
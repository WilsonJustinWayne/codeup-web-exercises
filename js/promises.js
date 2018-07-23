(() => {
    $(document).ready(() => {
        "use strict";

        const wait = num => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (typeof num === "number") {
                        resolve();
                    } else {
                        reject();
                    }
                }, num);
            });
        };
        wait(1000).then(() => console.log('You\'ll see this after 1 second'));
        wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

        const git = username => {
            const url = `https://api.github.com/users/${username}/events`;
            let thing = "PushEvent";
            return new Promise((resolve) => {
                if (username !== "") {
                    resolve(
                        fetch(url, {headers: {'Authorization': 'token 91de8b3d1da21b0a7f283dd9bb2a2a6214a422e5'}})
                            .then(response => response.json())
                            .then(events => events.forEach(event => {
                                    if (event.type === thing) {
                                        $('#pushText').html(`${username}'s last push was on: ${event.created_at}`);
                                        thing = "";
                                    }
                                })
                            )
                    );
                }
            });
        };
        $('#usernameSubmit').click(e => {
            e.preventDefault();
            git($('#usernameGet').val());
        })
    });
})();
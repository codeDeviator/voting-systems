let option1Count = 0;
let option2Count = 0;
let option3Count = 0;

function vote(option) {
    switch (option) {
        case 'option1':
            option1Count++;
            document.getElementById('option1-count').innerText = option1Count;
            break;
        case 'option2':
            option2Count++;
            document.getElementById('option2-count').innerText = option2Count;
            break;
        case 'option3':
            option3Count++;
            document.getElementById('option3-count').innerText = option3Count;
            break;
        default:
            break;
    }
}


function updateVotePercentage() {
    const totalVotes = option1Count + option2Count + option3Count;
    const option1Percentage = totalVotes === 0 ? 0 : Math.round((option1Count / totalVotes) * 100);
    const option2Percentage = totalVotes === 0 ? 0 : Math.round((option2Count / totalVotes) * 100);
    const option3Percentage = totalVotes === 0 ? 0 : Math.round((option3Count / totalVotes) * 100);
    
    document.getElementById('option1-percentage').innerText = option1Percentage + '%';
    document.getElementById('option2-percentage').innerText = option2Percentage + '%';
    document.getElementById('option3-percentage').innerText = option3Percentage + '%';

    document.getElementById('option1-bar').style.width = option1Percentage + '%';
    document.getElementById('option2-bar').style.width = option2Percentage + '%';
    document.getElementById('option3-bar').style.width = option3Percentage + '%';
}

function resetVotes() {
    option1Count = 0;
    option2Count = 0;
    option3Count = 0;
    updateVoteCount();
    updateVotePercentage();
}

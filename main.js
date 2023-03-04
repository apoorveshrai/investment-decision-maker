var initialPrice = document.querySelector("#initial-price");
var stocksQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");
var submitButton = document.querySelector("#check-button");
var outputBox = document.querySelector("#resultbox");

submitButton.addEventListener("click", buttonHandler);

function buttonHandler() {
    var originalprice = Number(initialPrice.value);
    var quantity = Number(stocksQuantity.value);
    var tradingprice = Number(currentPrice.value);

    calculateProfitAndLoss(originalprice, quantity, tradingprice);
}

function calculateProfitAndLoss(initial, quantity, current) {
    if (initial > current) {
        var loss = (initial - current);
        var totalloss =  loss* quantity;
        var lossPercentage = (loss / initial) * 100;

        showOutput(
            `Dear investor, your total loss is ${totalloss} and the percent is ${lossPercentage}%`
        );
    } else if (current > initial) {
        var profit = (current - initial);
        var totalprofit = profit * quantity;
        var profitPercentage = (profit / initial) * 100;

        showOutput(
            `Dear investor, your total profit is ${totalprofit} and the percent is ${profitPercentage}%`
        );
    } else {
        showOutput(`No pain no gain and no gain no pain`);
    }
}

function showOutput(message) {
    outputBox.innerHTML = message;
}
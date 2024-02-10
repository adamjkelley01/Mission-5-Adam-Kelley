// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.
$(document).ready(function () {
    // Event listener for the calculate button
    $("#calculateBtn").click(function () {
        // Get the number of hours entered by the user
        var hours = parseInt($("#hours").val());

        // Validate if the input is a positive number
        if (hours <= 0 || isNaN(hours)) {
            alert("Please enter a valid positive number of hours.");
            return;
        }

        // Get the hourly rate
        var hourlyRate = parseFloat($("#hourlyRate").val().replace('$', ''));

        // Calculate the total cost
        var total = hours * hourlyRate;

        // Display the total in the output box
        $("#total").val("$" + total.toFixed(2));
    });
});

// Write your JavaScript code.

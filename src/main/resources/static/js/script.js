$(document).ready(function () {
    const data = {
        maharastra: {
            cities: ["Mumbai", "Pune", "Nagpur"],
            stations: ["Chhatrapati Shivaji Maharaj Terminus", "Pune Station", "Nagpur Station"],
        },
        karnataka: {
            cities: ["Bangalore", "Mysore", "Hubli"],
            stations: ["Bangalore City Station", "Mysore Station", "Hubli Junction"],
        },
        gujarat: {
            cities: ["Ahmedabad", "Surat", "Vadodara"],
            stations: ["Ahmedabad Junction", "Surat Station", "Vadodara Junction"],
        },
    };

    // Populate dropdowns dynamically
    $("#state").change(function () {
        const state = $(this).val();
        if (state && data[state]) {
            $("#city").empty().append('<option>--Select City--</option>');
            data[state].cities.forEach((city) => {
                $("#city").append(`<option value="${city}">${city}</option>`);
            });

            $("#station").empty().append('<option>--Select Railway Station--</option>');
            data[state].stations.forEach((station) => {
                $("#station").append(`<option value="${station}">${station}</option>`);
            });
        } else {
            $("#city").empty().append('<option>--Select City--</option>');
            $("#station").empty().append('<option>--Select Railway Station--</option>');
        }
    });

    // Form submit functionality
    $("#employeeForm").submit(function (event) {
        event.preventDefault(); // Prevent default form submission
        alert("Your data has been successfully stored! 🎉"); // Show popup
    });
});

$(document).ready(function () {
    const data = {
        Maharastra: {
            cities: ["Mumbai", "Pune", "Nagpur"],
            stations: ["Chhatrapati Shivaji Maharaj Terminus", "Pune Station", "Nagpur Station"],
        },
        Karnataka: {
            cities: ["Bangalore", "Mysore", "Hubli"],
            stations: ["Bangalore City Station", "Mysore Station", "Hubli Junction"],
        },
        Gujarat: {
            cities: ["Ahmedabad", "Surat", "Vadodara"],
            stations: ["Ahmedabad Junction", "Surat Station", "Vadodara Junction"],
        },
    };

    $("#state").change(function () {
        const state = $(this).val();
        
        $("#city").empty().append('<option value="" disabled selected>--Select City--</option>');
        $("#station").empty().append('<option>--Select Railway Station--</option>');
        $("#station").prop("disabled", true);
        
        if (state && data[state]) {
            data[state].cities.forEach((city) => {
                $("#city").append(`<option value="${city}">${city}</option>`);
            });
        }
    });

    $("#city").change(function () {
        const city = $(this).val();
        
        if (city) {
            const state = $("#state").val();
            const stations = data[state].stations; 
            $("#station").empty().append('<option value="" disabled selected>--Select Railway Station--</option>');
            
            stations.forEach((station) => {
                $("#station").append(`<option value="${station}">${station}</option>`);
            });
            
            $("#station").prop("disabled", false);
        } else {
            $("#station").empty().append('<option>--Select Railway Station--</option>');
            $("#station").prop("disabled", true);
        }
    });

    $("#employeeForm").submit(function (event) {
        event.preventDefault();

        const formData = {
            userName: $("input[name='userName']").val(),
            gender: $("input[name='gender']:checked").val(),
            state: $("#state").val(),
            city: $("#city").val(),
            railwayStation: $("#station").val(),

            remarks: $("#remarks").val(),
        };

        $.ajax({
            url: "/api/form", 
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify(formData),
            success: function (response) {
                alert("Data Submitted Successfully!");
                console.log("JSON Response:", response);
            },
            error: function (error) {
                console.error("Error:", error);
            },
        });
    });
});

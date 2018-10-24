$("#submit-btn").on("click", function (event) {
    event.preventDefault();

    var newFern = {
        name: $("#name").val().trim(),
        photo: $("#picture").val().trim(),
        scores: [
            $("#q1").val(),
            $("#q2").val(),
            $("#q3").val(),
            $("#q4").val(),
            $("#q5").val(),
            $("#q6").val(),
            $("#q7").val(),
            $("#q8").val(),
            $("#q9").val(),
            $("#q10").val()
        ]
    };

    $.post("/api/new", newFern,
        function (data) {

            console.log(data);
            $("#resName").text(data.name);
            $("#resPhoto").attr("src", data.photo);
        });



});
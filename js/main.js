$(function(){

    var term = "first";
        
    $('#top1,#top2,#top3,#middle1,#middle2,#middle3,#bottom1,#bottom2,#bottom3').on('mousedown', function(){
         
        if (!($(this).val() === "")) {
            ;
        } else if (term === "first") {
            $(this).val("◯");
            $('.mark').text("✕");
            term = "second";
        } else {
            $(this).val("✕");
            $('.mark').text("◯");
            term = "first";
        }

    })

    $('#top1,#top2,#top3,#middle1,#middle2,#middle3,#bottom1,#bottom2,#bottom3').on('mouseup', function(){

        var top1 = $('#top1').val();
            top2 = $('#top2').val();
            top3 = $('#top3').val();
            mid1 = $('#middle1').val();
            mid2 = $('#middle2').val();
            mid3 = $('#middle3').val();
            bot1 = $('#bottom1').val();
            bot2 = $('#bottom2').val();
            bot3 = $('#bottom3').val();

        if (!(top1 === "") && !(top2 === "") && !(top3 === "") && !(mid1 === "") && !(mid2 === "") && !(mid3 === "") && !(bot1 === "") && !(bot2 === "") && !(bot3 === "")) {
            $('.judge').text("Draw");
            $('.mark').text("ーーー");
            $('.cell').prop('disabled', true);
            $('button').fadeIn(500);
        }
        
        if (top1 === "◯" && top2 === "◯" && top3 === "◯" || mid1 === "◯" && mid2 === "◯" && mid3 === "◯" || bot1 === "◯" && bot2 === "◯" && bot3 === "◯" || top1 === "◯" && mid1 === "◯" && bot1 === "◯" || top2 === "◯" && mid2 === "◯" && bot2 === "◯" || top3 === "◯" && mid3 === "◯" && bot3 === "◯" || top1 === "◯" && mid2 === "◯" && bot3 === "◯" || top3 === "◯" && mid2 === "◯" && bot1 === "◯") {
            $('.judge').text("Winner is ◯ !");
            $('.mark').text("ーーー");
            $('.cell').prop('disabled', true);
            $('button').fadeIn(500);
        }

        if (top1 === "✕" && top2 === "✕" && top3 === "✕" || mid1 === "✕" && mid2 === "✕" && mid3 === "✕" || bot1 === "✕" && bot2 === "✕" && bot3 === "✕" || top1 === "✕" && mid1 === "✕" && bot1 === "✕" || top2 === "✕" && mid2 === "✕" && bot2 === "✕" || top3 === "✕" && mid3 === "✕" && bot3 === "✕" || top1 === "✕" && mid2 === "✕" && bot3 === "✕" || top3 === "✕" && mid2 === "✕" && bot1 === "✕") {
            $('.judge').text("Winner is ✕ !");
            $('.mark').text("ーーー");
            $('.cell').prop('disabled', true);
            $('button').fadeIn(500);
        }
      
    })

    $('button').on('click', function(){
        location.reload();
    });

});
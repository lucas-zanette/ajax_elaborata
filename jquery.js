
/*
<script type="text/javascript">
    function alterar() {
        $("h1.azul").css("color", "red");
    }
</script>
*/

$(document).ready(
    function () {   //ready garante que vai executar depois que o html carregar a pagina inteira na primeira vez
        //previne o erro anterior de ter que chamar o js no final do body

        $("#btn").click(
            function () {
                var cor = $("#cores").val(); //val funcao do jquery - pega ou seta valores
                $("h1.azul").css("color", cor);
            }
        );

        $("#cores").change(
            //console.log($(this);
            function () {
                //var cor = $("#cores").val(); //val funcao do jquery - pega ou seta valores
                var cor = $(this).val(); //val funcao do jquery - pega ou seta valores
                $("h1.azul").css("color", cor);
            }
        );

        $("#btn-add").click(
            function () {
                var cor = $("nova-cor").val();
                var opt = '<option value="' + cor + '" >' + cor + '</option>';

                $("#cores").append(opt);

            });

    }
);
<script>

    initializeFlatpickr = function(){

        $('.flatpickr-y-m-d').flatpickr({
            dateFormat: 'Y-m-d',
            allowInput: true
        });

        $('.flatpickr').flatpickr({
            dateFormat: 'd/m/Y',
            allowInput: true
        });
    }

    $(function(){
        initializeFlatpickr();
    })
</script>

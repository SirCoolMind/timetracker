/*=========================================================================================
  File Name: custom.js
  Description: Load JS from NPM and custom general javascript function

  ----------------------------------------------------------------------------------------
    Do npm install and put require inside here. settle
==========================================================================================*/

try {

    window.Swal = require('sweetalert2');
    window.flatpickr = require('flatpickr');

    /*-- Datatables Jquery with all extension --*/
    window.JSZip = require('jszip');
    require('datatables.net-bs5');
    require('datatables.net-buttons/js/dataTables.buttons');
    require('datatables.net-buttons/js/buttons.flash');
    require('datatables.net-buttons/js/buttons.html5');
    require('datatables.net-buttons/js/buttons.print');
    require('datatables.net-buttons/js/buttons.colVis');
    require('datatables.net-autofill');
    require('datatables.net-colreorder');
    require('datatables.net-datetime');
    require('datatables.net-fixedcolumns');
    require('datatables.net-fixedheader');
    require('datatables.net-keytable');
    require('datatables.net-rowgroup');
    require('datatables.net-rowreorder');
    require('datatables.net-scroller');
    require('datatables.net-searchbuilder');
    require('datatables.net-searchpanes');
    require('datatables.net-select');
    require('datatables.net-staterestore');
    window.pdfMake = require('pdfmake/build/pdfmake');
    window.pdfFonts = require('pdfmake/build/vfs_fonts');
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    /*-- End Datatables Jquery with all extension --*/

} catch (e) { }


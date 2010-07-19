var Calculator = {

  initialize : function() {
    $('#calculator .numbers input:not(#sum)').click( function() {
        var original_result = $('#result').attr('value');
        $('#result').attr( 'value', original_result + this.value )
    } );

    $('#calculator .operators input').click( function() {
        var original_result = $('#result').attr('value');
        $('#result').attr( 'value', eval(original_result) + this.value )
    } );

    $('#calculator input#sum').click( function() {
      $('#result').attr( 'value', eval( $('#result').attr('value') ) )
    } );
  }

};

jQuery(document).ready( function() { Calculator.initialize() } );

'use strict';

// Order is chaos.

var mainHTML = document.querySelector('.main').innerHTML;

function main() {

    /**
     * Init variables
     */

    var dragged,
        rands = [],

        qtbl = document.getElementById('question-table'),
        jack = document.querySelector('.jack'),

        group_1_1 = document.getElementById('1_1'),
        group_1_2 = document.getElementById('1_2'),
        group_1_3 = document.getElementById('1_3'),
        group_2_1 = document.getElementById('2_1'),
        group_2_2 = document.getElementById('2_2'),
        group_2_3 = document.getElementById('2_3'),
        group_3_1 = document.getElementById('3_1'),
        group_3_2 = document.getElementById('3_2'),
        group_3_3 = document.getElementById('3_3'),
        group_4_1 = document.getElementById('4_1'),
        group_4_2 = document.getElementById('4_2'),
        group_4_3 = document.getElementById('4_3'),

        ver_1_sum = document.getElementById('ver_1_sum'),
        ver_2_sum = document.getElementById('ver_2_sum'),
        ver_3_sum = document.getElementById('ver_3_sum'),
        ver_4_sum = document.getElementById('ver_4_sum'),

        hor_1_sum = document.getElementById('hor_1_sum'),
        hor_2_sum = document.getElementById('hor_2_sum'),
        hor_3_sum = document.getElementById('hor_3_sum'),

        draggable1  = document.getElementById('draggable1'),
        draggable2  = document.getElementById('draggable2'),
        draggable3  = document.getElementById('draggable3'),
        draggable4  = document.getElementById('draggable4'),
        draggable5  = document.getElementById('draggable5'),
        draggable6  = document.getElementById('draggable6'),
        draggable7  = document.getElementById('draggable7'),
        draggable8  = document.getElementById('draggable8'),
        draggable9  = document.getElementById('draggable9'),
        draggable10 = document.getElementById('draggable10'),
        draggable11 = document.getElementById('draggable11'),
        draggable12 = document.getElementById('draggable12');



    /**
     * Activate reload button
     */
    jack.firstElementChild.addEventListener('click', reload);



    /**
     * Utility functions
     */

    function generateRandomNumbers() {
        while (rands.length < 12) {
            rands.push(Math.ceil(Math.random() * 9));
        }
    }

    function shuffle(array) {
        array.sort(function () {
            return Math.random() - 0.5;
        });
    }



    /**
     * Generate random numbers
     */
    generateRandomNumbers();



    /**
     * Assign numbers to hidden boxes
     */

    group_1_1.dataset.num = rands[0];
    group_1_2.dataset.num = rands[1];
    group_1_3.dataset.num = rands[2];
    group_2_1.dataset.num = rands[3];
    group_2_2.dataset.num = rands[4];
    group_2_3.dataset.num = rands[5];
    group_3_1.dataset.num = rands[6];
    group_3_2.dataset.num = rands[7];
    group_3_3.dataset.num = rands[8];
    group_4_1.dataset.num = rands[9];
    group_4_2.dataset.num = rands[10];
    group_4_3.dataset.num = rands[11];



    /**
     * Help
     */

    group_1_1.innerText = rands[0];
    group_1_2.innerText = rands[1];
    // group_1_3.innerText = rands[2];
    // group_2_1.innerText = rands[3];
    group_2_2.innerText = rands[4];
    // group_2_3.innerText = rands[5];
    group_3_1.innerText = rands[6];
    group_3_2.innerText = rands[7];
    // group_3_3.innerText = rands[8];
    group_4_1.innerText = rands[9];
    // group_4_2.innerText = rands[10];
    group_4_3.innerText = rands[11];



    /**
     * Assign boxes sum ( verticle & horizontal )
     */

    ver_1_sum.innerText = rands[0] + rands[1] + rands[2];
    ver_2_sum.innerText = rands[3] + rands[4] + rands[5];
    ver_3_sum.innerText = rands[6] + rands[7] + rands[8];
    ver_4_sum.innerText = rands[9] + rands[10] + rands[11];

    hor_1_sum.innerText = rands[0] + rands[3] + rands[6] + rands[9];
    hor_2_sum.innerText = rands[1] + rands[4] + rands[7] + rands[10];
    hor_3_sum.innerText = rands[2] + rands[5] + rands[8] + rands[11];



    /**
     * Enable drag and drop
     */

    document.addEventListener('drag', function (event) { }, false);

    document.addEventListener('dragstart', function (event) {
        // store a ref. on the dragged elem
        dragged = event.target;
        // make it half transparent
        event.target.style.opacity = .5;
    }, false);

    document.addEventListener('dragend', function (event) {
        // reset the transparency
        event.target.style.opacity = '';
    }, false);

    document.addEventListener('dragover', function (event) {
        /**
         * drop actions get prevented by the browser by default
         * so we need to prevent the browser from preventing drop action.
         * two prevents equal an allow, right?
        */
        event.preventDefault();
    }, false);

    document.addEventListener('dragenter', function (event) {
        // highlight potential drop target when the draggable element enters it
        if (event.target.className === 'dropzone') {
            event.target.style.background = '#9fa8da';
        }
    }, false);

    document.addEventListener('dragleave', function (event) {
        // reset background of potential drop target when the draggable element leaves it
        if (event.target.className === 'dropzone') {
            event.target.style.background = '';
        }
    }, false);

    document.addEventListener('drop', function (event) {
        // prevent default action (open as link for some elements)
        event.preventDefault();

        // move dragged elem to the selected drop target
        if (event.target.className === 'dropzone') {
            event.target.style.background = '';

            if (event.target.innerText === '') {
                dragged.parentNode.removeChild(dragged);
                event.target.append(dragged);
            }
        }
        
        checkCalculation();
        
    }, false);



    /**
     * Shuffle numbers before set them to the draggable boxes
     */

    shuffle(rands);



    /**
     * Set numbers to the draggable boxes
     */

    draggable1.innerText  = rands[0];
    draggable2.innerText  = rands[1];
    draggable3.innerText  = rands[2];
    draggable4.innerText  = rands[3];
    draggable5.innerText  = rands[4];
    draggable6.innerText  = rands[5];
    draggable7.innerText  = rands[6];
    draggable8.innerText  = rands[7];
    draggable9.innerText  = rands[8];
    draggable10.innerText = rands[9];
    draggable11.innerText = rands[10];
    draggable12.innerText = rands[11];

        

    /**
     * Inner text number
     */

    function getInnerText(elem) {
        return parseInt(elem.innerText);
    }



    /**
     * Check lines calculation
     */

    function checkCalculation() {

        var results = [];

        var group_ver_1 = getInnerText(group_1_1) + getInnerText(group_1_2) + getInnerText(group_1_3);
        var group_ver_2 = getInnerText(group_2_1) + getInnerText(group_2_2) + getInnerText(group_2_3);
        var group_ver_3 = getInnerText(group_3_1) + getInnerText(group_3_2) + getInnerText(group_3_3);
        var group_ver_4 = getInnerText(group_4_1) + getInnerText(group_4_2) + getInnerText(group_4_3);

        var group_hor_1 = getInnerText(group_1_1) + getInnerText(group_2_1) + getInnerText(group_3_1) + getInnerText(group_4_1);
        var group_hor_2 = getInnerText(group_1_2) + getInnerText(group_2_2) + getInnerText(group_3_2) + getInnerText(group_4_2);
        var group_hor_3 = getInnerText(group_1_3) + getInnerText(group_2_3) + getInnerText(group_3_3) + getInnerText(group_4_3);

        qtbl.classList.remove('coll');
        qtbl.classList.add('sepa');

        jack.firstElementChild.removeEventListener('click', reload);
        jack.lastElementChild.removeEventListener('click', reload);



        /**
         * Vertical (remove)
         */

        group_1_1.classList.remove('match');
        group_1_2.classList.remove('match');
        group_1_3.classList.remove('match');

        group_2_1.classList.remove('match');
        group_2_2.classList.remove('match');
        group_2_3.classList.remove('match');

        group_3_1.classList.remove('match');
        group_3_2.classList.remove('match');
        group_3_3.classList.remove('match');

        group_4_1.classList.remove('match');
        group_4_2.classList.remove('match');
        group_4_3.classList.remove('match');


        
        /**
         * Horizontal (remove)
         */

        group_1_1.classList.remove('match');
        group_2_1.classList.remove('match');
        group_3_1.classList.remove('match');
        group_4_1.classList.remove('match');

        group_1_2.classList.remove('match');
        group_2_2.classList.remove('match');
        group_3_2.classList.remove('match');
        group_4_2.classList.remove('match');

        group_1_3.classList.remove('match');
        group_2_3.classList.remove('match');
        group_3_3.classList.remove('match');
        group_4_3.classList.remove('match');



        /**
         * Vertical (add)
         */

        if ( group_ver_1 === parseFloat(ver_1_sum.innerText) ) {
            group_1_1.classList.add('match');
            group_1_2.classList.add('match');
            group_1_3.classList.add('match');

            results.push(true);
        }

        if ( group_ver_2 === parseFloat(ver_2_sum.innerText) ) {
            group_2_1.classList.add('match');
            group_2_2.classList.add('match');
            group_2_3.classList.add('match');

            results.push(true);
        }

        if ( group_ver_3 === parseFloat(ver_3_sum.innerText) ) {
            group_3_1.classList.add('match');
            group_3_2.classList.add('match');
            group_3_3.classList.add('match');

            results.push(true);
        }

        if ( group_ver_4 === parseFloat(ver_4_sum.innerText) ) {
            group_4_1.classList.add('match');
            group_4_2.classList.add('match');
            group_4_3.classList.add('match');

            results.push(true);
        }



        /**
         * Horizontal (add)
         */

        if ( group_hor_1 === parseFloat(hor_1_sum.innerText) ) {
            group_1_1.classList.add('match');
            group_2_1.classList.add('match');
            group_3_1.classList.add('match');
            group_4_1.classList.add('match');

            results.push(true);
        }

        if ( group_hor_2 === parseFloat(hor_2_sum.innerText) ) {
            group_1_2.classList.add('match');
            group_2_2.classList.add('match');
            group_3_2.classList.add('match');
            group_4_2.classList.add('match');

            results.push(true);
        }

        if ( group_hor_3 === parseFloat(hor_3_sum.innerText) ) {
            group_1_3.classList.add('match');
            group_2_3.classList.add('match');
            group_3_3.classList.add('match');
            group_4_3.classList.add('match');

            results.push(true);
        }

        if (results.length === 7) {
            // win
            qtbl.classList.remove('sepa')
            qtbl.classList.add('coll');

            jack.firstElementChild.style.display = 'none';
            jack.lastElementChild.style.display = 'block';

            jack.lastElementChild.addEventListener('click', reload);
        }

    }

    function reload() {
        document.querySelector('.main').innerHTML = mainHTML;
        main();
    }

} // main end

main();

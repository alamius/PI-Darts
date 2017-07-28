Array.prototype.portion = function(from, to) {
    part = [];
    var i = from;
    while(i++ < to){
        part.push(this[i]);
    }
    return part;
}

Array.prototype.get_average = function(){
    sum = 0;
    for(i = 0; i < this.length; i++){
        sum += this[i];
    }
    return sum/this.length;
}

// String.prototype.contains = function(obj) {
//     var i = this.length;
//     while (i--) {
//         if (this[i] === obj) {
//             return true;
//         }
//     }
//     return false;
// }

function info() { //div-id, p-element-id, text consisting of a desciprion and a number
    add_text_node("div0", "total",  "total dots: "              + str(dots_total));
    add_text_node("div0", "circl",  "dots in the circle: "      + str(dots_circl));
    add_text_node("div0", "sqare",  "dots outside the circle: " + str(dots_total - dots_circl));
    add_text_node("div0", "pi",     "circle / total * 4: "      + str(pi_approx));
    return 0;
}

function add_text_node(div_id, p_id, text) {
    text = document.createTextNode(text);
    // console.log(text);
    p = document.getElementById(p_id);
    clear_HTML_Node(p);
    p.appendChild(text);
    // console.log(p);
    document.getElementById(div_id).appendChild(p);
}

function clear_HTML_Node(node) {
    while (node.firstChild) {
        node.removeChild(node.firstChild);
    }
}


const stringSize = (text) => {
    return text.length;
}
const replaceCharacterE = (text) => {
    return text.replace("e", " ");
}
const concatString = (text1, text2) => {
    return (text1 + text2);
}
const showChar5 = (text) => {
    return text.charAt(4);
}
const showChar9 = (text) => {
    return text.substring(0,9);
}
const toCapitals = (text) => {
    return text.toUpperCase();
}
const toLowerCase = (text) => {
    return text.toLowerCase();
}
const removeSpaces = (text) => {
    return text.trim();
}
const IsString = (text) => {
    if (typeof text === 'string' || text instanceof string) {
        return true
    } else false
}

const getExtension = (text) => {
    return text.split('.').pop();
}
const countSpaces = (text) => {
    var spaceCounter = (text.split(' '));
    return (spaceCounter.length -1);
}
const InverseString = (text) => {
    return text.split("").reverse().join("");
}

const power = (x, y) => {
    return Math.pow(x,y);
}
const absoluteValue = (num) => {
    return Math.abs(num);
}
const absoluteValueArray = (array) => {
    return array.map(Math.abs)
}
const circleSurface = (radius) => {
    return Math.round(Math.PI*Math.pow(radius, 2));
}
const hypothenuse = (ab, ac) => {
    return Math.pow((Math.pow(ab,2)+Math.pow(ac,2)),0.5);
}
const BMI = (weight, height) => {
    return Math.round(weight/Math.pow(height,2)*100)/100;
}

const createLanguagesArray = () => {
    return arr = ["Html","CSS","Java","PHP"];
}

const createNumbersArray = () => {
    var arr = [];
    for (let i = 0; i <= 5; i++) {
        var element = arr.push(i);
    }
    return arr;
}

const replaceElement = (languages) => {
    languages = ['Html', 'CSS', 'Fifa 22', 'PHP'];
    var remove = languages.splice(2,1, "Javascript");
    return languages;
}

const addElement = (languages) => {
    languages = ['Html', 'CSS', 'Javascript', 'PHP'];
    var add = languages.push('Ruby', 'Python')
    return languages
}

const addNumberElement = (numbers) => {
    var numbers = [0,1,2,3,4,5]
    var add = numbers.splice(0,0, -2, -1);
    return numbers
}

const removeFirst = (languages) => {
    var languages = ['Html', 'CSS', 'Javascript', 'PHP', 'Ruby', 'Python'];
    const modifiedLanguages = languages.shift();
    return languages
}

const removeLast = (languages) => {
    var languages = ['CSS', 'Javascript', 'PHP', 'Ruby', 'Python'];
    var modifiedLanguages = languages.pop();
    return languages;

}

const convertStrToArr = (social_arr) => {
    var socialNetworksString = 'Facebook,Twitter,Google +,Viadeo,LinkedIn';
    return socialNetworksString.split(",");
}

const convertArrToStr = (languages) => {
    var languagesString = ['CSS', 'Javascript', 'PHP', 'Ruby']
    return languagesString.toString();

}

const sortArr = (social_arr) => {
    var socialNetworks = ['Facebook','Twitter', 'Google +','Viadeo','LinkedIn']
    return socialNetworks.sort();
}

const invertArr = (social_arr) => {
    var languages = ['CSS','Javascript','PHP','Ruby']
    return languages.reverse();
}
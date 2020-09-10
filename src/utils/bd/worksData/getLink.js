



export default function (workAlias) {

    const obj = {}

    switch (workAlias) {
        case 'friko_dev': obj.name = 'фрико.рус'; break;
        case 'kflex_dev': obj.name = 'kflex.ru'; break;
        case 'rusheat_dev': obj.name = 'rusheat.ru'; break;
        case 'teplomash_dev': obj.name = 'тепломаш.рф'; break;
        case 'volcano_dev': obj.name = 'volcano.ru'; break;
        case 'readings_dev': obj.name = 'andrewkozinsky.ru/p/diletant'; break;
        case 'table_dev': obj.name = 'andrewkozinsky.ru/p/table'; break;
        default: return null
    }

    obj.href = 'http://' + obj.name

    return obj
}
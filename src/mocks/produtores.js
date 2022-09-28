import green from '../assets/produtores/green.png';
import salad from '../assets/produtores/salad.png';
import jennyJack from '../assets/produtores/jenny-jack.png';
import grow from '../assets/produtores/grow.png';
import potager from '../assets/produtores/potager.png';

const randon = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const produtores = {
    title: "Produtores",
    list: [
        {
            name: "Green",
            image: green,
            distance: `${randon(1,750)} m`,
            starts: randon(1,5),
        },
        {
            name: "Salad",
            image: salad,
            distance: `${randon(1,750)} m`,
            starts: randon(1,5),
        },
        {
            name: "Jenny Jack",
            image: jennyJack,
            distance: `${randon(1,750)} m`,
            starts: randon(1,5),
        },
        {
            name: "Grow",
            image: grow,
            distance: `${randon(1,750)} m`,
            starts: randon(1,5),
        },
        {
            name: "Potager",
            image: potager,
            distance: `${randon(1,750)} m`,
            starts: randon(1,5),
        },
    ]
}

export default produtores;
import dayjs from 'dayjs'

const parseChineseDate = date => dayjs(date).format('DD/MM/YYYY');

export {
    parseChineseDate,
}
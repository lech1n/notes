import { format } from 'date-fns'

const getDate = () => {
	const currentDate = new Date()
	return format(currentDate, `dd-LL-yyyy || HH:mm`)
}

export default getDate
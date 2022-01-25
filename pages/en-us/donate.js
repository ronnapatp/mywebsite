import Head from '../../components/meta'
import Navbar from '../../components/navbar'
import Donate from '../../components/donate'
import Footer from '../../components/footer'
import {
    langenus
} from '../../script/languages'
export default function () {
    return(
        <>
            <Head title='Privacy' image='/meta.png' />
            <Navbar lantoshow={langenus} pathname='en-us' page='/privacy' />
            <Donate />
            <Footer paht='en-us' />
        </>
    )
}
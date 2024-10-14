import chalk from "chalk";
import qr from "qrcode-terminal"

async function handle(err, result) {
    if(err){
        console.log("error on applicaiton")
        return;
    }

    const isSmall = result.type == 2;
    qr.generate(result.link, {small: isSmall}, (qrcode) =>{
        console.log(chalk.green("QR CODE gerado com sucesso:\n"))
    })
}

export default handle;
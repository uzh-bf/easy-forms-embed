import React from 'react'
import {FC, useEffect} from 'react'


interface PrefillInfo {
  /**
   * Any info you want to have prefilled as an Object and formated like {text_1: "value", text_2: "value"}
   */
  [key: string]: any

}
// this interface is used to prefill the form
interface Props {
  /**
   * The url of the form
   */
  formUrl: URL,

  /**
   * Any info you want to have prefilled as an Object and formated like {text_1: "value", text_2: "value"}
   */
  prefillInfo?: PrefillInfo
}


const EasyFormsEmbed:FC<Props> = ({formUrl, prefillInfo}) => {
  //regex to get ID of form from form link
  let regex = new RegExp('id=.*')
  let match = regex.exec(formUrl.toString())
  const formUrlId = match![0].slice(3)
  const key = `form_${Math.floor(Math.random() * 1000)}`

  //regex to get appPathUrl from form link
  let appPathUrlRegex: RegExp = new RegExp('www..*/index.php')
  let appPathUrlMatch: RegExpExecArray | null = appPathUrlRegex.exec(formUrl.toString())
  const appPathUrl: string = appPathUrlMatch![0].slice(0,-9)

  useEffect(() => {
    const scriptElement: any = document.createElement('script')
    const prefillInfoData = prefillInfo

    const options = {
      // ID of the form
      id: formUrlId,
      theme: 0,
      container: key,
      height: '479px',
      form:
        '//' + appPathUrl + 'index.php?r=app%2Fembed',
      defaultValues: prefillInfoData,
    }
    scriptElement.type = 'text/javascript'
    scriptElement.src =
      'https://' + appPathUrl + 'static_files/js/form.widget.js'
    scriptElement.onload = scriptElement.onreadystatechange = function () {
      const rs = this.readyState
      if (rs) if (rs !== 'complete') if (rs !== 'loaded')
        return
      try {
        // @ts-ignore
        new window.EasyForms().initialize(options).display()
      } catch (e) {
      }

    }
    const scr = document.getElementsByTagName('script')[0]
    const par: any = scr.parentNode
    par.insertBefore(scriptElement, scr)
  })

  return (
    <div id={key}>
      Fill in the{' '}
      <a href={formUrl.href}>
        online form
      </a>
    </div>
  )
}

export default EasyFormsEmbed

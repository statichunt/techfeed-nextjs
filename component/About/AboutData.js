import Image from "next/image";
import { marked } from "marked";
import { useRouter } from "next/router";
import { useEffect } from "react";

const AboutData = ({ data }) => {
  const router = useRouter();
  useEffect(() => {
    if (data.frontmatter.draft == true) {
      router.push("/404");
    }
  });
  return (
    <div className="container postContents mt-24 mb-32">
      <div className="xl:w-2/3 lg:w-3/4 md:w-4/5 sm:w-11/12 ">
        <div className="w-full  md:h-37 h-60  relative mx-auto mb-10">
          <Image
            className="rounded-sm"
            alt=""
            src={data.frontmatter.aboutImage}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANoAAADnCAMAAABPJ7iaAAAAwFBMVEX///8REiTy8vLk5efS09W3uLrDxMZ1dnqam59cXWGNjpBDQ0Woqa2BgoZUVFZnaGwzMTIjHyAAAAqur7H4+PgAAAAbFxiUlJhWWFxRUlfi4+XQ0dNtbnOAgYUAABvv7+88PD9MTE5ISEoAABbc3NwqKClrbHCjpKkAABIVFiccHS2MjZQWEBInJSZiYmI1NTh3eIAuLjw4OERcXGZSUl5ISVOFhY2FhYW8vr0mJzVmZ247PEaVlZ4hIDKlpaxvcHgJZ//NAAAOVElEQVR4nO2diXqiyhaFEWRwiCYBJQkKUYlEzYCzMemT93+rCw5YBTWAUkj3ZX0n3X3ERH72rlW7BgjHFSpUqFChQoUKFSpUKHtpqvyxlq59Fiyktlpv7bfWrX3tE0ldTutup/Zb+dqnkrLsA5nH9nntc0lZ8tsR7a4lXvtkUpX2HpDdvcnXPpvkEmwLd0hrndDajSxPKg3Vay/vLz2MucdC03hfzE7wXPG99q2nF0y2xUHjD9IYnuY5qrzf7tVeow7HQOP5fLKJ7duj3lB9Mh1NO6HlKyc/XgK09y7iOB0NIMtV2LTaLSCET1LRtLyi8c8A2Z0afQMVjc8rGtcD0F4Qp05D0/KLVn0H2N6MyPFkaBmccHzZd2DYon0bDY3PLxrXeAHDFjk5ClqO85HjNm0A7V0JH6ag5TloHAe6/+1z+MKT0XIdNI7TQSO5C1fJZLR8B40TICP5CB1NgJa7oHnjaNBI7kKFJBEt5/nIcRIYtvcqfJCIlvN89ATVke/wxSeh5SRoglgXnzDH6mDYQoUkCS1e0DS21JZ8+/n5+SKj4bQ30Eh68LG4aJjT54UnwfuPWbYKteear+caega4CxkJNJNKQItTPloemK8n7LzSZdIaezJPn0g2GwobVEgS0GLk45HMY2MTN/G2ViOzVcCwQSNSPFoMEzmReUoR6KTucw0Qik2EjKQOAmDR6EGDyJ6YeMkHiPb8jGDjP8Go9YEjWDR60CAygY2TQGi1Gmo1CRqRtoFCMiYa4lNDZGzQ1jBaDRG3J3BoAxaSWDRaPobJ2CSkdBtCQ7S3D2hEejISHBotHy0hLBZkHDcMhQ3hkxI0ItWpaJSghWPGyvzBjg2bk+CsHTAixaBRghYlY9Rle9c4zBbNSQXy/w0FjRy0DMlQbOG4CaBHnowkDlo4aJmSIdgi7Q0akbaPByG0EzAJLUImMCVDsYVy0oBGpMGKVKMdoLWC+S5SPmbmIMBH0tpbHzSS2+Or9VPYWkcDJwUt4vpss3GvaNzgukQFw/YWvNw7bkFoBV0CoRK5Qsx8RdkgL9HArq19Otl+y8/Jduu0aopfeLoSGTUn1yeTBBdtNOez1Wo1wMISF7SMvREUog8A5hSAEWm7Dn2fJsANCoN2RTJaH7A+traXHrmY1fJHRqlLtOG+ud3VaMVswAZcgiuTIdsbkJPq7Vv7rV2lD0C0aMyu4fqwEH0AOIcnGOfte7x6zHwh6pLLB1O5IEPl5MVb5rTrZ+NeEbaLN99GpgtYkQmi40ikMiCck5+IHSPJPjEJmXb2TLmm9Pu9Xr+hE0IRittzZA07oRKQWbbhq3xOXOV+Y6der4PfwW71QLbPOvaN8RSXTBPKRnkvIzmbciDz1e/VceYH5eTlbS0WGW8fuXZsSafvtFoDVK+/jm7h2X/OY8D2HF7BTiztiUoGBOyAlvR6Sv1GIwTXVNGLDUHc0GsciRRYJIaMfwqB+Ur4GWqvEVGvX0WdPP9x68E9f6JWARLrwIYen1kILk8JM1JEoHlwtaGE+EHisPHYdNIZLWp+e7MQH6KhAnYOWrmGQvMtpaIgLEVjvbpu2Riu5AnJIaN26A1kjKUwU9g6IBtJXLlKuLD5qjXU7Io7/snAg50RNM9Iwh4J52UPaSnpi5SJfsyStrSdbLmGz0rfL4ci6xaGt44DmIHbxELTk96ghM5hCafZ5Ew8r4AMfro47JNC1x+yY7MoXPbFvU15TYLroW5YSEUaicwoC6lcU6tOyMsaq/sjbQIY/m6y5JLkHiZ0vSr9u88SLmhGOe2l+icFEzpG9xDyaLTLrAMnbfOB6g2GDD6Kw6AZ7JY17GokL3vI+9UuV9RFPOtg81EHWWoTNsw+q/vjYRsxUrUOjDSjC+Rlr8nqc8CMTMvr6RKU3nFOqMHuWgrBzA4T68BqI/f7vX5vzXK10htU+9NxbLZlkfQkqhLbdu1vOUYOuAsVKlSoUKFEkhydpnpWj+gRCGPSg+JPJRiPjw909TqsO2xfwkaKo5grUZvHSiw9VNiz2bHAfMVhE2KSeWwd1mRWbDIpzly98hAXrdJjPfdvxEfbxGhv8ckqD5cuy9MUn0ySYswj9xKg3bAl0+J5yF4xliCSoLGaqGOEJsfPyEfWzzFLkpAx7FqK7ZCVHuuBfXzvl2LNPsUO2+OlO2Doig22idXH8p1YcXt4ZO2PnrS4aHHX2dThwyNNlYwWtGPlZJLdTNFb4sLKbv5M4zWaMjuXQoUKFSr0r3quUW02h/q5m23iSZBEcWNnewUttVlp+nq4dPs7QZqkir7UM3ZOnytbr+zBfDZ245qNGEjKJHTaRq5smydVWF1SWxVBGaxvqRScU8AOaKxSUgyJ6UKlZtyEwTwx2lzBh9F8nbX5kS5LlaNcnhjtP7NQaF6rSz90dhURsJ0YTf0go7ZTqpbCi/IDmstraxv6958lLJpnKWlZl600MQHbiZUthxwylJdp1ApSF5eJOz2wm0aQCGiXW4qlErmalSHLCRIK2yW9QRlrHQcwmfGWcYsGd6alWGsy14OewbqoVhZJTc7TGXcb8EMSWaWZ2e0ZAjl0anK2Kp6sUrnJ9JcE8QaRLek1tvAdWcVhO0pDSLM3+LxMepklTNAqnQ2i5QpGnDWgeNJsG7VN0JKwcAk/QEWhVZrIe4RsudnpDDuplCWa6PhCrbp7loJW0rsOo2iVDjqtpaG809A5hwWWVXfqvhwVOTxDW0pCNDvU1ioPN5i9GUcyj+3yEbdaPwp9zy3HR0OXOFs6cCY6uJ5fasonXdqDl536Sbgf9rSByJK7v33KyEoXv+HkFDM/bJeWXSJAVkfnpC8L7A3O6IeMfZVVqSiEyyJ1ADK5c2FGamodYsMngWYfq5RY23zCshyPSxZJ0y1QzFJHw+ekL89SVBX76Gz6Z5EPQ+0s9YSksbGcvg7FLG0boeQkS0XIhpd32uGMvA5bOBvlTgpdNh9GuwZbJGYdcK9FWa2rsbZf+vWFBBQ5OWCDXT8UM2Eid7tduUt3FVHXFUXXgUy2rs1GjJnQ7d746sq07tTxwHzpwOx6NG4Un0xXRDKtuifz2cgTM5sDmccGBPiqOUluZ4Z8c1QXXOvwxpPwvLamAAJev2JOksk4vXtCA/aC2tV1tVpdA9ll6ycy6JFWUbaMcjLq+hCZcArazc3pzmbDB9spqNwMAE2BduldKScpMePULoDmHl8VArJqYKVlEE2HhrlXycmo68NkWhdA6wbH1ICsuj6WtBaEBpcyV2CjxYyToHwMjK8KKOgS6qCPKKHntGbNRiXjqmDQbo5no60BtMA24YwMTUZnzEYns8GgdYPxG38DoAWOAbm/Et7um2lO0sm4Omgi3aAX49coNE4C0fRw/54hm0F2/R0CFLTTYQwaZCRKZIyeWU5aMpWME8GgyafWg0GDjUSP/hqGMJrDZrFB7FDJuBvQRIC9CTg0GzKS6HlH2ZiETaeTlaF8BHoqHBrngGFDjGX50JQCm6WUGyoZp0CVCDAXhkWToLAhpgVDcXOYrFdWqWQCZI8gARaNh/wftSkKZnOYPHOt3qGQhUwEPAksGidCRoJaL7HAnEzpUY0hCR0KmQaZiA4ewqMJFCPh4D6A0R5FdUgkA8egHhp0lng02Eig6xEIyElWK+jqvs9uYu6AqkJNDXJpAppBKiQPOiy7OQ67vQG24pHhnvEMjUG7sCMQ0DSoIsHdN2ao9ZjTf+cL/9Oh8jE04UNA4zbEQjIP4rtYEyGjUQrJHEiCghaaXSWhEUekuRA0Bl2HTpCIBheSWT/Cli7MGPQgIho8Ik1hUSRlOZDzh02aiEYZkV5buDHoQRoRjYeMhOENH2cJXz7uREbjVChsOfuV2VD5GH00AgXtiV5IXk1lfPm4EwUtNCLNlf9DY9BuNKNoaHAhmfmmRII0qFNDnDoNDR6R5ikjtTWAhvol6DQ0aESar8YGRC1cPu5ERQNHpPkqSICVJ+SzEahooJEgpxGuJitwSITzc3HQToWknrPiX5KPuw6Q9kZH48SALVfe76l8s9srUkUbdww0r5Lc7SG50rYskjRvjK/iJkDjoO328zN/vGvqQi8d/htSTmS4X8H0t0o6hY3ps5KvIE0PyHJVa6Qh60iWs14rDWmiXl1XlaweBpqtNCvD5zgVKlSoUKFChQoVKlTo/0TqPyvu/p8VV/pnVaD9jSKimQPv6/R//peJf3fetEczH70/Zl/7l2bTw7HXbXU83h5hzK13fDEfZX2GZ+sQtaVrDiaDsVkyx6WtR+P/y5yIrjE1XgdmaVAajFrG9+vXfDsl/7wc6YA2UO4HE3fyc+9O3Hl9/DP5+fPf1qlPW1Nhsi0bE1MyVtKsvJ1+Z3p2I/9SBxqPzcOr4FvGpZF3ub/M8Wg6Hpm7f++PHNFW0+18Utq6but+vlh93c8mv/emUpamUqtcatmu3mpJ/OI1E6CTpr/LxZdZmi5HX6PS7KeyNGemOf31EKajr/F4Oh7P5r+665qTpbuabXUvOr/jydIE0czl72rmzOfz7au5XSgD03S25qDVUldSy261yhPXQxOVVsZog9VkKU70pbJcrX6Wq/l/C3e1Wvwo93N3vpo4rr5afH9PFqtf51d3Xt2Z7sxd/ceF0EqDencwmX1/Tb6/v1ezyfTn+/d+oq/sP8avriril73aSuPyNmODNLfKtztTlu5itXJHv5PV3EdzJ19bH03/M3e7pf++55PFZOWsvlavi9Vi5brKK4RmPk5LY/e3NHJ/zYW57M5GM3Pmdsfm1/Z+K7+a09X3fDzNGs1rSuZ0XJqVvqZem5qNR+NZyfT+mnp/fI3/eK1vWvpejqfem0bTkZez5nj2Oj20xaBfO/Za3pd57M38fq1k7juzgWmCndxfoP/XauTvVoH2N+p/7fZFC02VG5wAAAAASUVORK5CYII="
          ></Image>
        </div>
        <div className="text-center ">
          <div>
            <h1 className="pageTitle text-h2 leading-snug capitalize font-secondary ">
              {data.frontmatter.about}
            </h1>
          </div>
          <div
            className="markdown"
            dangerouslySetInnerHTML={{ __html: marked.parse(data.content) }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default AboutData;

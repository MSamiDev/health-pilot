# HealthPilot Healthverse

<div align="center">
  <a id="top" href="https://healthpilot.vercel.app/" target="blank">
    <img src="https://user-images.githubusercontent.com/86917304/227741974-16cdabd9-e1b8-4f63-b721-6e16f0d4923d.png" width="200px" alt="">
  </a>

  <h3 align="center">HealthPilot - The HealthVerse</h3>

  <p align="center">
    <a href="https://healthpilot.vercel.app/" target="blank">Live Demo</a> |
    <a href="https://github.com/MSamiDev/health-pilot/issues" target="blank">Report Bug</a> |
    <a href="https://github.com/MSamiDev/health-pilot/pulls" target="blank">Request Feature</a>
  </p>
</div>

---

## The motivation:
As per the Lancet [report](https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(18)31668-4/fulltext) 1.6 million Indians died due to poor quality of care in 2016. And nearly twice as many as due to non-utilisation of healthcare services(838,000 persons) that why we visualized to make the healthcare system more mobile and easy available with 27*7 capabilities. 

<!-- <img
  src=""
  alt="Alt text"
  title="Optional title"
  style="display: inline-block; margin: 0 auto; max-width: 300px"> -->
  
  <p align="right">(<a href="#top">back to top</a>)</p>
  
 ---

## How it works :

We have here modernized our healthcare system through  WeCare Fun Bot , WeCare Checker , Scheduling Appointments with Doctors and Doctor Login System .The fun bot is used to tell jokes to uplift our mood through jokes , Jokes helps one to cope mental pressure and lighten our mood. Here we are prediciting one's possiblity to have a certain Disease. Here we are using our model's API to predict the possibility to have the particular disease based  on specific chosen symtoms. Finally we are also allowing users to book online appointment for check up. 

<p align="right">(<a href="#top">back to top</a>)</p>

---

## Technologies Used :

1. **Frontend frameworks** : `React` ,  `SASS` , `react-router-dom` , `react-toastify` ,  `react-helmet`

2. **Authenciation**       : `Firebase`

3. **Database and storage**: `Firestore`

4. **Services**            : `Azure` , `JOKE API` , `Postman` , `Kaggle` , `Vercel` 

5. **Deployment**          : `Docker` , `FastAPI`

6. **ML Frameworks**       : `Numpy` , `Pandas` , `Tensorflow` , `Sklearn` , `nltk` 

<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

---

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This project doesn't rely on any external dependencies or services._

1. Clone the repo
   ```sh
   git clone 
   ```
2. Now install all npm packages.
   ```sh
    npm i https://github.com/MSamiDev/health-pilot.git
   ```

3. Now you have define own firebase project config at `firebase/firebaseconfig.js`.

   ![image](https://user-images.githubusercontent.com/86917304/183728317-30372103-f0d7-4e99-b12c-7f0cd825ea18.png)

4. Open another terminal, install the requirements.txt and run the Chatbot API at `localhost:8000`
  
    ```
    pip install -r requirements. txt
    
    uvicorn app.app:app --reoload
    ```

5. After all steps defined above you can run command int the previous terminal `npm start` to run application at `localhost:3000`.

<p align="right">(<a href="#top">back to top</a>)</p>

---

## Let's do a walkthrough of my app

## **Welcome Your Web app**

![image](https://user-images.githubusercontent.com/86917304/227757152-4b058dd7-aa24-41d9-8fda-d7420a20e72c.png)


## A Smart Bot (healthGenie)
This is our bot which is intregrate with the our designed ML model which firstly analyze your mood and then suggest you joke if it detect you are sad otherwise bless you with happy quote.

![image](https://user-images.githubusercontent.com/86917304/227757256-b2d1809d-05bb-48d9-9358-0fa317ab283c.png)



## Appointment Booking
This is our feature to book appoinment and register you doubts with the expert doctors,  doctors can respond accordingly to that.

![image](https://user-images.githubusercontent.com/86917304/227757284-e640fdb1-96c8-445e-b6fb-35db67d3addc.png)



## 



![Welcome](./images/patient.jpg)



## Now Fill in the Symtopms you likely have



![Welcome](./images/symtom.jpg)




## Hurray ! We got the results

**Here we see we have got a diagonis report and possibility of having the disease based on the patients track record of previous illness along with the other symtoms of that disease**


*Add_in : You can also learn about the disease directly by clicking on info*



![Welcome](./images/disease_report.jpg)


## Doctor's call is final, So do check yourself up with doctor!!

### Deskstop View
![image](https://user-images.githubusercontent.com/86917304/190920646-b3ddd488-9d46-41fa-b167-173541c76426.png)

### Mobile View of Doctor's Dashboard
![Welcome](https://user-images.githubusercontent.com/73426684/213864966-5869f035-222c-4b1a-b853-830604d53ab5.jpg)


<p align="right">(<a href="#top">back to top</a>)</p>

---

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

**Don't forget to give the project a star! Thanks again!**

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Team Name - Hackit

Leader - [Sreetama](mailto:fool100abc@gmail.com)

Project Link: [HealthPilot](https://healthpilot.vercel.app)

Video Link : [HealthPilot]()

## Team Members: 

- [Sreetama Ghosh Hazar](https://github.com/Sreetama2001)
- [Pranshu Jain](https://github.com/Pranshu321)
- [Mohammad Sami Shaikh](https://github.com/MSamiDev)


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Alan Ai](https://alan.app/)
* [Favicon Converter](https://favicon.io/favicon-converter/)
* [Img Shields](https://shields.io)
* [GitHub Pages](https://pages.github.com)
* [Font Awesome](https://fontawesome.com)
* [React Icons](https://react-icons.github.io/react-icons/search)

<p align="right">(<a href="#top">back to top</a>)</p>

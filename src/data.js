import { BsWordpress, BsDatabaseCheck } from 'react-icons/bs'
import { MdComputer, MdEmail } from 'react-icons/md'
import { FiFigma } from 'react-icons/fi'
import { FaLinkedin, FaKaggle, FaGithub } from 'react-icons/fa'

import Project1 from './images/Project1.jpg'
import Project2 from './images/Project2.jpg'
import Project3 from './images/Project3.jpg'
import Project4 from './images/Project4.jpg'
import Project5 from './images/Project5.jpg'
import Project6 from './images/Project6.jpg'
import Project7 from './images/Project7.jpg'
import Project8 from './images/Project8.jpg'
import Project9 from './images/Project9.jpg'
import Project10 from './images/Project10.jpg'
import Project11 from './images/Project11.jpg'
import Project12 from './images/Project12.jpg'
import Project13 from './images/Project13.jpg'
import Project14 from './images/Project14.jpg'
import Project15 from './images/Project15.png'
import Project16 from './images/Project16.jpg'
import Project17 from './images/Project17.png'
import Project19 from './images/Project19.png'
import Project22 from './images/Project22.jpg'
import Project23 from './images/Project23.png'
import Project24 from './images/Project24.png'
import SoalanMP from './images/soalanmp.jpg'
import BankChurn from './images/bank-churn.png'
import ForestCover from './images/forest-cover.png'
import SelangorElection from './images/selangor-election.png'
import CensusClusters from './images/census-clusters.png'
import NewsClassification from './images/news-classification.jpg'

export const EMAIL = 'pakyenloke@gmail.com'

export const links = [
    { name: 'Highlights', path: '/#highlights' },
    { name: 'Projects', path: '/#projects' },
    { name: 'Other Work', path: '/#other' },
]

export const socials = [
    { name: 'LinkedIn', icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/lokepak-yen/' },
    { name: 'GitHub', icon: <FaGithub />, url: 'https://github.com/pyloke-web' },
    { name: 'Kaggle', icon: <FaKaggle />, url: 'https://www.kaggle.com/pakyenn/code' },
    { name: 'Email', icon: <MdEmail />, url: `mailto:${EMAIL}` },
]

export const programs = [
    {
        id: 1,
        icon: <BsDatabaseCheck />,
        title: 'Data Analytics',
        info: 'Analytics with R, Python, SPSS, Matlab and SAP Analytics Cloud.',
    },
    {
        id: 2,
        icon: <MdComputer />,
        title: 'Front-end Development',
        info: 'Led projects and provided technical support for front-end development.',
    },
    {
        id: 3,
        icon: <FiFigma />,
        title: 'Web Design',
        info: 'Led teams on UI/UX design for professional websites and gamified apps.',
    },
    {
        id: 4,
        icon: <BsWordpress />,
        title: 'WordPress',
        info: 'Built websites for ecommerce businesses, charities and event organisers.',
    },
]

// Featured live products, shown first in Highlights and linking straight to the site
export const featured = [
    {
        id: 'soalanmp',
        image: SoalanMP,
        title: 'SoalanMP',
        info: "A searchable record of 21,000+ Malaysian parliamentary questions and answers, with MP and ministry profiles, an election map, a Budget 2027 explorer, and a tool to email your MP.",
        method: 'Civic Tech',
        tag: 'Web App',
        path: 'https://soalanmp.xyz',
    },
]

// Featured projects, each with its own write-up at /projects/:slug
export const caseStudies = [
    {
        slug: 'automl-app',
        image: Project1,
        title: 'Auto Machine Learning App',
        info: 'An analytics web app that lets users analyse, visualise and explore data, and run regression models automatically.',
        method: 'Programming',
        tag: 'Streamlit',
        link: 'https://www.linkedin.com/posts/lokepak-yen_automated-machine-learning-automatically-activity-7066966273670197248-8p5m',
        summary: "In today's data-driven world, having a reliable and efficient data analytics tool is crucial for businesses and data enthusiasts. This project introduces a simple yet powerful web application built using Streamlit. The tool allows users to perform data manipulation, analysis, visualisation, and automatic machine learning using regression models. With its user-friendly interface, this tool opens up a world of possibilities for exploring datasets and deriving valuable insights.",
        problem: 'Data analysis and machine learning can often be complex and time-consuming tasks, requiring expertise in programming and statistical modelling. Additionally, the process of preprocessing data, visualising it, and selecting the best regression model for predictions can be overwhelming. The challenge lies in finding a way to simplify these processes and make them accessible to users with varying levels of technical knowledge.',
        solution: [
            'The tool addresses these challenges by providing a streamlined workflow for data preprocessing, data profiling, visualisation, and automated machine learning for regression tasks. Users upload their dataset (in CSV format) and explore it using the data viewer. Missing values can be handled by keeping, dropping, filling, or imputing them, and users can select specific columns to tailor the analysis to their needs.',
            "One of the key features is the integration of the pandas_profiling package, which generates a comprehensive data profile report covering the dataset's structure, distribution, missing values, and correlations. The tool also provides basic visualisations such as scatter plots, line charts, and histograms, making it easier to discover patterns, trends, and outliers.",
            'Leveraging the pycaret library, the tool runs a series of regression models on the dataset and presents the performance metrics for each. This automated approach removes the need for manual model selection and hyperparameter tuning, so users can make informed decisions based on accuracy and other relevant metrics.',
        ],
        conclusion: 'By integrating data preprocessing, profiling, visualisation, and regression modelling into a single application, users can streamline their workflow and focus on deriving insights from their data. Whether you are a data analyst, data scientist, or business professional, this tool makes it easier to make data-driven decisions with confidence.',
    },
    {
        slug: 'behavioural-experiment',
        image: Project2,
        title: 'Behavioural Experiment',
        info: 'An attentional bias visual cue experiment with a Vernier Discrimination Task for upright and inverted faces.',
        method: 'Programming',
        tag: 'Matlab',
        summary: 'I developed an emotional attentional bias behavioural experiment using MATLAB. This experiment aimed to investigate the effects of manipulating stimulus onset asynchrony on attentional bias towards fearful faces. It used a Vernier Discrimination Task to measure visual acuity and an adapted Posner spatial cueing paradigm, and consisted of three parts: a brief familiarisation trial, Experiment 1, and Experiment 2.',
        problem: 'Attentional bias towards emotional stimuli, particularly fearful faces, is a well-known phenomenon in psychology. However, the precise mechanisms underlying this bias and its temporal dynamics are not fully understood. Previous research has shown that the timing of stimulus presentation can modulate attentional bias, but further investigation is required to clarify the effects of stimulus onset asynchrony on attentional bias towards fearful faces, and the impact of emotional attention on visual acuity.',
        solution: [
            "To address these research gaps, I developed an experimental paradigm combining the Vernier Discrimination Task with an adapted Posner spatial cueing paradigm.",
            'In Experiment 1, participants were presented with two face images on either side of a fixation cross. The face images disappeared after a specific duration, and a blank screen was presented for varying durations. The Vernier Discrimination Task was then administered to assess visual acuity. Experiment 2 followed the same procedure with inverted face images.',
        ],
        conclusion: 'The experiment provides insights into the temporal dynamics of attentional bias towards fearful faces. By manipulating stimulus onset asynchrony and using the Vernier Discrimination Task, it allows a comprehensive investigation of the effect of emotional attention on visual acuity. This project showcases my skills in experimental design, programming, and data analysis in the field of psychology.',
    },
    {
        slug: 'mental-health-nlp',
        image: Project11,
        title: 'AI Model Application',
        info: 'Applying mental health-related pre-trained HuggingFace models for sentiment analysis and diagnosis prediction.',
        method: 'Natural Language Processing',
        tag: 'HuggingFace',
        link: 'https://www.kaggle.com/code/pakyenn/mental-health-with-hugging-face-pre-trained-models',
        summary: 'I explored the role of Natural Language Processing (NLP) in improving the understanding and treatment of mental health disorders, looking at open-source pretrained models and their applications in mental health predictions, along with their strengths, limitations, and ethical considerations. Techniques such as sentiment analysis, fill-mask pipelines, and text classification can surface insights and automate parts of mental health assessments to support healthcare professionals.',
        problem: 'Mental health disorders significantly impact well-being and quality of life. However, accurately identifying and assessing these disorders can be challenging due to the subjective nature of symptoms and the vast amount of unstructured text data generated by patients. Misdiagnoses or delayed interventions can have severe consequences.',
        solution: [
            'NLP techniques offer a promising way to enhance mental health assessments. Pretrained models and pipelines can analyse large amounts of unstructured text, such as social media posts, electronic health records, and patient-provider communication.',
            'Sentiment analysis models identify the overall attitude expressed in text, fill-mask pipelines predict missing words in a given context, and text classification models assign predefined labels to text, aiding in the identification of mental health conditions.',
        ],
        conclusion: 'NLP models show great potential for improving mental health assessments, but biased or unrepresentative training data can lead to inaccurate or harmful predictions. Quality data, responsible development, and collaboration between NLP experts and mental health professionals are essential for these models to improve access to care and the lives of people experiencing mental health disorders.',
    },
]

export const projects = [
    {
        id: 17,
        image: Project17,
        title: 'Healthcare Financing Analysis',
        info: 'Studied government spending on healthcare, funding sources and functional breakdown.',
        method: 'Policy Analysis',
        tag: 'Python',
        path: 'https://www.kaggle.com/code/pakyenn/malaysia-solar-panel-rooftops',
    },
    {
        id: 24,
        image: Project24,
        title: 'Renewable Energy Analysis',
        info: 'Explored the feasibility of rooftop solar projects, the implications of government incentives and environmental impact.',
        method: 'Policy Analysis',
        tag: 'Python',
        path: 'https://www.kaggle.com/code/pakyenn/malaysia-solar-panel-rooftops',
    },
    {
        id: 'census-clusters',
        image: CensusClusters,
        title: 'Cluster Analysis of Census Data',
        info: 'Grouped constituencies with K-Means clustering on census indicators such as population, income, households and businesses.',
        method: 'Machine Learning',
        tag: 'Python',
        path: 'https://www.kaggle.com/code/pakyenn/cluster-analysis-malaysia-census-data',
    },
    {
        id: 22,
        image: Project22,
        title: 'State Election Analysis',
        info: 'Examined demographic representation, winning chances and disparities in competition between state assemblies.',
        method: 'Electoral Analysis',
        tag: 'Python',
        path: 'https://www.linkedin.com/posts/lokepak-yen_the-prn15-vote-reflecting-on-2023-i-activity-7149692990083481600-86ft',
    },
    {
        id: 16,
        image: Project16,
        title: 'Cluster Analysis of Global Fertility Trends',
        info: 'Examined fertility trends using K-Means clustering and evaluated their influence on the economy.',
        method: 'Machine Learning',
        tag: 'Python',
        path: 'https://www.linkedin.com/posts/lokepak-yen_fertility-economy-a-key-takeaway-activity-7270999481121202176-q8KW',
    },
    {
        id: 19,
        image: Project19,
        title: 'AI Journaling App',
        info: 'A journal app where entries are automatically analysed to determine a sentiment score.',
        method: 'Programming',
        tag: 'React',
        path: 'https://journal-app-eight-taupe.vercel.app/',
    },
    {
        id: 'selangor-election',
        image: SelangorElection,
        title: 'Selangor Electoral Data Analysis',
        info: 'Linked Selangor state election results from 2008, 2013 and 2018 with census data, and predicted winning alliances with gradient boosting.',
        method: 'Electoral Analysis',
        tag: 'Python',
        path: 'https://www.kaggle.com/code/pakyenn/selangor-electoral-data-analysis',
    },
    {
        id: 'forest-cover',
        image: ForestCover,
        title: 'Malaysia Forested Area Analysis',
        info: 'Explored forest cover by state from 2000 to 2018, including the gap between East and West Malaysia.',
        method: 'Geospatial Analysis',
        tag: 'Python',
        path: 'https://www.kaggle.com/code/pakyenn/malaysia-forested-area-eda',
    },
    {
        id: 'bank-churn',
        image: BankChurn,
        title: 'Bank Customer Churn Prediction',
        info: 'Compared logistic regression, random forest, gradient boosting and XGBoost for predicting which customers leave a bank.',
        method: 'Machine Learning',
        tag: 'Python',
        path: 'https://www.kaggle.com/code/pakyenn/bank-customer-churn-prediction',
    },
    {
        id: 'news-classification',
        image: NewsClassification,
        title: 'News Classification with Transformers',
        info: 'Classified live Google News articles about Malaysia into categories using pre-trained Hugging Face models.',
        method: 'Natural Language Processing',
        tag: 'HuggingFace',
        path: 'https://www.kaggle.com/code/pakyenn/using-transformers-google-news-classification',
    },
    {
        id: 9,
        image: Project9,
        title: 'Electoral Data Analysis',
        info: 'Examined voter turnout, majorities and returned votes by state and parliament.',
        method: 'Electoral Analysis',
        tag: 'Python',
        path: 'https://www.kaggle.com/code/pakyenn/malaysia-general-election-2022-data-exploration/notebook',
    },
    {
        id: 10,
        image: Project10,
        title: 'Stock Price Prediction',
        info: 'Exploratory analysis and price prediction on the Kuala Lumpur Stock Exchange using LSTM networks.',
        method: 'Machine Learning',
        tag: 'Python',
        path: 'https://www.kaggle.com/code/pakyenn/klse-stock-market-analysis-prediction-using-lstm',
    },
    {
        id: 3,
        image: Project3,
        title: 'Population Density Mapping',
        info: 'Geospatial visualisation of population density by state legislative assembly.',
        method: 'Geospatial Analysis',
        tag: 'QGIS',
        path: 'https://www.linkedin.com/posts/lokepak-yen_what-is-the-population-distribution-like-activity-7063351078485983232-nbB4',
    },
    {
        id: 6,
        image: Project6,
        title: 'Distribution of Apartment Rent',
        info: 'Geospatial visualisation of apartment rent prices in Kuala Lumpur and Selangor, Malaysia.',
        method: 'Geospatial Analysis',
        tag: 'QGIS',
        path: 'https://www.canva.com/design/DAFiz6ZUHrI/x5tjYz4F9D09J0kct7zlRg/edit',
    },
    {
        id: 7,
        image: Project7,
        title: 'Flight Data Analysis',
        info: 'Exploratory analysis of 28 million flights across US airports over time.',
        method: 'Big Data Analysis',
        tag: 'Python & R',
        path: 'https://docs.google.com/document/d/1Vic8QtQrY0Pgkvt7L7RDZg_UKvhOqfStP2mi1fVt4zM/edit?usp=sharing',
    },
    {
        id: 8,
        image: Project8,
        title: 'Exchange Rate Visualisation',
        info: 'Exploratory visualisation of exchange rates over time with interactive widgets.',
        method: 'Time Series Analysis',
        tag: 'Python',
        path: 'https://www.kaggle.com/code/pakyenn/malaysian-daily-exchange-rate-eda-arima',
    },
]

export const otherProjects = [
    {
        id: 4,
        image: Project4,
        title: 'Portfolio Website',
        info: 'Professional portfolio website for a fitness company, built with React.',
        method: 'Programming',
        tag: 'React',
    },
    {
        id: 23,
        image: Project23,
        title: 'Policy Data Analysis',
        info: "Analysed political campaign feedback that helped shape a political party's manifesto.",
        method: 'Data Analysis',
        tag: 'Python',
    },
    {
        id: 5,
        image: Project5,
        title: 'Prevalence of Mental Disorders',
        info: 'Exploratory and geospatial analysis of mental health-related data in Malaysia.',
        method: 'Data Analysis',
        tag: 'Tableau',
    },
    {
        id: 15,
        image: Project15,
        title: 'Job Board Phone App',
        info: 'App for searching the latest full-time, part-time and contract jobs, built with React Native and RapidAPI.',
        method: 'Programming',
        tag: 'React Native',
    },
    {
        id: 12,
        image: Project12,
        title: 'Event Website',
        info: 'An event website with information, event highlights, and registration forms.',
        method: 'Front-end Web',
        tag: 'Wix',
    },
    {
        id: 13,
        image: Project13,
        title: 'Ecommerce Website',
        info: 'An ecommerce website with company information, forms and a payment gateway.',
        method: 'Front-end Web',
        tag: 'WordPress',
    },
    {
        id: 14,
        image: Project14,
        title: 'Charity Website',
        info: 'A charity website with event highlights, organisation information and a contact form.',
        method: 'Front-end Web',
        tag: 'WordPress',
    },
]

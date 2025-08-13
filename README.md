# Diabetes Prediction from Health Data

A full-stack machine learning application that predicts the likelihood of diabetes based on key health indicators. Using the PIMA Indians Diabetes Database, this application was built from the ground up, starting with in-depth exploratory data analysis and multi-model implementation, culminating in a trained XGBoost model deployed as a REST API with Flask. To showcase the practical application, the project includes an interactive web interface built with HTML and JavaScript that allows users to get real-time predictions from the live model.


---

## Features

-   **Exploratory Data Analysis (EDA):** In-depth analysis and visualization of the PIMA Indians Diabetes Database.
-   **Data Preprocessing:** Handled missing values (imputation) and standardized features for optimal model performance.
-   **Multi-Model Training:** Trained and evaluated several classification algorithms, including Logistic Regression, K-Nearest Neighbors, Random Forest, and XGBoost.
-   **Hyperparameter Tuning:** Utilized `GridSearchCV` to find the optimal parameters for the best-performing model (XGBoost).
-   **Reusable ML Pipeline:** Encapsulated the entire preprocessing and prediction workflow into a single, robust `scikit-learn` Pipeline.
-   **REST API:** Deployed the trained pipeline as a RESTful API using **Flask**, making the model accessible for predictions via web requests.
-   **Interactive Web Interface:** Built a user-friendly front-end with **HTML, CSS, and JavaScript** that allows users to input patient data and receive real-time predictions from the API.

---

## Technology Stack

-   **Backend:** Python, Flask
-   **Machine Learning:** Scikit-learn, Pandas, NumPy, XGBoost
-   **Data Visualization:** Matplotlib, Seaborn
-   **Frontend:** HTML, CSS, JavaScript (with Fetch API)
-   **Development Environment:** Jupyter Notebook, Git

---

## Test Data Different from the Dataset
| Pregnancies | Glucose | BloodPressure | SkinThickness | Insulin | BMI  | DiabetesPedigreeFunction | Age | Outcome |
|-------------|---------|---------------|---------------|---------|------|--------------------------|-----|---------|
| 3           | 142     | 78            | 28            | 125     | 33.4 | 0.672                    | 45  | 1       |
| 0           | 97      | 65            | 22            | 88      | 28.9 | 0.412                    | 29  | 0       |
| 5           | 156     | 92            | 35            | 210     | 36.8 | 0.845                    | 54  | 1       |
| 2           | 110     | 70            | 27            | 130     | 30.2 | 0.514                    | 31  | 0       |
| 7           | 168     | 84            | 32            | 180     | 39.1 | 0.921                    | 49  | 1       |
| 1           | 102     | 58            | 16            | 85      | 24.3 | 0.302                    | 22  | 0       |
| 4           | 125     | 76            | 24            | 98      | 27.8 | 0.671                    | 37  | 0       |
| 6           | 140     | 88            | 34            | 240     | 42.5 | 0.756                    | 50  | 1       |
| 0           | 115     | 72            | 20            | 120     | 29.4 | 0.382                    | 33  | 0       |
| 8           | 178     | 96            | 41            | 275     | 45.2 | 1.089                    | 61  | 1       |

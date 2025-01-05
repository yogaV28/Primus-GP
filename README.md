# Primus-GP

Primus-GP is an AI-powered platform designed to evaluate, prioritize, and optimize green finance investments. It assists banks and financial institutions in allocating capital to the most impactful and sustainable projects by leveraging data-driven insights and advanced optimization techniques.

## Features

- **Data Collection and Processing**: Aggregates ESG data from various sources, including government databases, NGOs, and financial institutions. Incorporates climate data, economic metrics, and project-specific KPIs to build a comprehensive dataset for evaluation.

- **Project Scoring and Analysis**: Utilizes AI models to evaluate projects based on predefined ESG metrics. Employs Natural Language Processing (NLP) to extract insights from unstructured reports, providing a holistic assessment of each project's sustainability impact.

- **Optimization Engine**: Implements linear programming and mixed-integer programming to maximize ESG outcomes within budget constraints. Incorporates portfolio theory to diversify green finance investments and predict future risks associated with green investments.

- **Stakeholder Dashboard**: Offers visualizations of project rankings, potential ROI, and ESG scores. Enables scenario analysis to explore the impact of different investment strategies, facilitating informed decision-making for stakeholders.

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yogaV28/Primus-GP.git
   cd Primus-GP
   ```

2. **Install dependencies**:

   Ensure you have [Python 3.8+](https://www.python.org/downloads/) installed. Then, install the required packages:

   ```bash
   pip install -r requirements.txt
   ```

## Usage

1. **Data Preparation**:

   - Place your ESG data, climate data, and project-specific KPIs in the `data/` directory.

2. **Model Training**:

   - Run the training script to train the AI models:

     ```bash
     python train_model.py
     ```

3. **Optimization**:

   - Execute the optimization engine to allocate resources:

     ```bash
     python optimize.py
     ```

4. **Dashboard**:

   - Launch the stakeholder dashboard to visualize results:

     ```bash
     streamlit run dashboard.py
     ```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes. Ensure that your code adheres to the project's coding standards and includes appropriate tests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
![Screenshot 2025-01-05 165452](https://github.com/user-attachments/assets/54365557-8821-4995-9ddc-5da4dc6dc5a6)


---

This README provides an overview of the Primus-GP platform, its features, installation instructions, usage guidelines, contribution information, and licensing details. It serves as a starting point for users and developers interested in utilizing or contributing to the project. 

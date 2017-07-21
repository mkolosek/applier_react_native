import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Text, View } from 'react-native';
import styles from '../../assets/styles/shared_styles';

const Answers = (props) => {
  const responseRows = [];
  props.selectedApplicant.responses.forEach((response) => {
    const key = `rsp-${response.id}`;
    const question =
      response.question_text.indexOf(';') !== -1
        ? `Question with options: ${response.question_text
            .split(';')
            .filter(a => a !== '')
            .join(', ')}`
        : response.question_text;
    responseRows.push(
      <View key={key} style={styles.positionRequests.responseRow}>
        <Text style={styles.fonts.medium}>
          {question}
        </Text>
        <Text style={[styles.fonts.medium, styles.margins.topSmall]}>
          {response.answer_text}
        </Text>
      </View>,
    );
  });
  return (
    <View>
      <ScrollView>
        {responseRows}
      </ScrollView>
    </View>
  );
};

Answers.propTypes = {
  selectedApplicant: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    token: PropTypes.string.isRequired,
    responses: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        question_text: PropTypes.string,
        answer_text: PropTypes.string,
      }),
    ),
  }).isRequired,
};

export default Answers;

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  messageTextContainer: {
    borderRadius: 15,
    padding: 14,
    backgroundColor: '#2980b9',
  },
  nameMessageContainer: {
    maxWidth: '60%',
    marginTop: 18,
  },
  messageText: {
    color: '#fff',
    fontWeight: '700',
  },
  avatar: { width: 25, height: 25 },
  ownerMessageContainer: {
    alignSelf: 'flex-end',
    flexDirection: 'row-reverse',
  },
  nameTxt: {
    fontSize: 12,
    color: 'gray',
    marginBottom: 5,
  },
});

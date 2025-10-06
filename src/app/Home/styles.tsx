import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9EBF0',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 40,
  },
  header: {
    backgroundColor: '#E9EBF0',
    width: '90%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
    padding: 15,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#cf3a69',
  },
  form: {
    width: '90%',
    backgroundColor: '#E9EBF0',
    alignItems: 'center',
    paddingBottom: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  input: {
    backgroundColor: '#fff',
    width: '80%',
    borderRadius: 6,
    padding: 10,
    marginVertical: 5,
  },
  botao: {
    backgroundColor: '#cf3a69',
    width: '80%',
    borderRadius: 6,
    padding: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
  },
  listaContainer: {
    width: '90%',
    backgroundColor: '#fff',
    marginTop: 20,
    borderRadius: 15,
    padding: 10,
  },
  listaHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  listaTitulo: {
    fontWeight: 'bold',
    color: '#555',
  },
  limparTexto: {
    color: '#888',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 0.5,
    borderColor: '#ccc',
  },
  itemNome: {
    flex: 1,
    marginLeft: 8,
    color: '#333',
  },
  itemKcal: {
    color: '#cf3a69',
    marginRight: 10,
  },
  footer: {
    position: "absolute",
    bottom: 20,
    backgroundColor: '#cf3a69',
    borderRadius: 10,
    padding: 10,
    elevation: 3,
  },
  total: {
    fontWeight: 'bold',
    fontSize: 16,
    color:"#fff"
  },
});
